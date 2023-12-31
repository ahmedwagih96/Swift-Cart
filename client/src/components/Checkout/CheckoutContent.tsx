import { Button, CircularProgress } from "@mui/material";
import { Formik } from "formik";
import { shades } from "../../theme";
import { ErrorToast, Payment, Shipping, Stepper } from "../";
import { initialCheckoutValues } from "../../constants/initialValues";
import { checkoutSchema } from "../../constants/schemas";
import useStripePayment from "../../hooks/useStripePayment";
import { ItemType } from "../../types/mongoTypes";

function CheckoutContent({ cart }: { cart: ItemType[] }) {
  const {
    handleFormSubmit,
    setActiveStep,
    activeStep,
    isFirstStep,
    isSecondStep,
    isLoading: loading,
    isError,
    errorMessage,
    reset,
  } = useStripePayment();
  return (
    <>
      <ErrorToast
        error={isError}
        errorMessage={errorMessage}
        setError={reset}
      />
      <Stepper activeStep={activeStep} />
      <div>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialCheckoutValues}
          validationSchema={checkoutSchema[activeStep]}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              {isFirstStep ? (
                <Shipping
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              ) : null}
              {isSecondStep ? (
                <Payment
                  values={values}
                  errors={errors}
                  touched={touched}
                  handleBlur={handleBlur}
                  handleChange={handleChange}
                  setFieldValue={setFieldValue}
                />
              ) : null}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "50px",
                }}
              >
                {!isFirstStep ? (
                  <Button
                    type="button"
                    fullWidth
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[200],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    Back
                  </Button>
                ) : null}
                {isFirstStep ? (
                  <Button
                    fullWidth
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{
                      backgroundColor: shades.primary[400],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                  >
                    Next
                  </Button>
                ) : null}
                {!isFirstStep ? (
                  <Button
                    type="submit"
                    fullWidth
                    color="primary"
                    variant="contained"
                    disabled={loading || !cart.length}
                    sx={{
                      backgroundColor: shades.primary[200],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                  >
                    {loading ? <CircularProgress size={22} /> : "Place Order"}
                  </Button>
                ) : null}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default CheckoutContent;
