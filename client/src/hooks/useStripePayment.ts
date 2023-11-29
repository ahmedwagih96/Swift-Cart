import { useState } from "react";
import { useAppSelector } from "../redux/hooks";
import { loadStripe } from "@stripe/stripe-js";
import { FormValues } from "../types/typing";
import { FormikHelpers } from "formik";

function useStripePayment() {
  const stripePromise = loadStripe(
    "pk_test_51OHnOrGEAsqvHIzIATZQtNZ8r9B2IF1GQDfyzPjRJQJ6fhaGtzCqX8SeLeD9NjUUyjfTEI3kTTOk1cMHjM9y910200IJJ0IRi9"
  );
  const { cart } = useAppSelector((state) => state.cartSlice);
  const [activeStep, setActiveStep] = useState<number>(0);
  const isFirstStep = activeStep === 0;
  const isSecondStep = activeStep === 1;
  const handleFormSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
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

    const response = await fetch("http://localhost:8000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    });
    const session = await response.json();
    await stripe.redirectToCheckout({
      sessionId: session.id,
    });
  }
  return {
    handleFormSubmit,
    setActiveStep,
    activeStep,
    isFirstStep,
    isSecondStep,
  };
}

export default useStripePayment;
