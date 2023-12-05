import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import { FormValues } from "../types/typing";
import { FormikHelpers } from "formik";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);
function useStripePayment() {
  const { cart } = useAppSelector((state) => state.reducers.cartSlice);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
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
      products: cart.map(({ _id, count }) => ({
        _id,
        count,
      })),
    };

    try {
      setLoading(true);
      setError(false);
      setErrorMessage("");
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/orders`,
        {
          credentials: "include",
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );
      const session = await response.json();
      setLoading(false);
      if (session.message) {
        setError(true);
        setErrorMessage(session.message);
        return;
      }
      await stripe.redirectToCheckout({
        sessionId: session.id,
      });
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setError(true);
      }
    }
  }
  return {
    handleFormSubmit,
    setActiveStep,
    activeStep,
    isFirstStep,
    isSecondStep,
    loading,
    error,
    errorMessage,
    setError,
  };
}

export default useStripePayment;
