import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { resetCart } from "../redux/features/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import { FormValues } from "../types/typing";
import { FormikHelpers } from "formik";
import { useMakeOrderPaymentMutation } from "../redux/services/orderApi";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

function useStripePayment() {
  const dispatch = useAppDispatch();
  const { cart, totalPrice } = useAppSelector(
    (state) => state.reducers.cartSlice
  );
  const [activeStep, setActiveStep] = useState<number>(0);
  const [makeStripePayment, { isError, error, isLoading, reset }] =
    useMakeOrderPaymentMutation();
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const handleFormSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    if (isFirstStep) setActiveStep(activeStep + 1);
    if (isFirstStep && values.shippingAddress.isSameAddress) {
      actions.setFieldValue("shippingAddress", {
        ...values.billingAddress,
        isSameAddress: true,
      });
    }
    if (isSecondStep) {
      makePayment(values);
    }
    actions.setTouched({});
  };

  async function makePayment(values: FormValues) {
    const stripe = await stripePromise;
    if (!stripe) return;

    const requestBody = {
      userName: [
        values.billingAddress.firstName,
        values.billingAddress.lastName,
      ].join(" "),
      email: values.email,
      totalPrice,
      products: cart.map(({ _id, count }) => ({
        _id,
        count,
      })),
    };

    const result = await makeStripePayment(requestBody);
    if ('data' in result && result.data?.id) {
      dispatch(resetCart());
      await stripe.redirectToCheckout({ sessionId: result.data.id });
    }
  }

  let errorMessage: string = "";
  if (isError && error) {
    const typedError = error as { status: number; data: { message: string } };
    errorMessage = typedError.data.message;
  }

  return {
    handleFormSubmit,
    setActiveStep,
    activeStep,
    isFirstStep,
    isSecondStep,
    isError,
    isLoading,
    errorMessage,
    reset,
  };
}

export default useStripePayment;
