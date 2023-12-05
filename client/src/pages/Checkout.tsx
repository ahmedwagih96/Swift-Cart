import {
  Button,
  Stepper,
  Step,
  StepLabel,
  CircularProgress,
} from "@mui/material";
import { Formik } from "formik";
import { shades } from "../theme";
import { Payment, Shipping, Seo, ErrorToast } from "../components";
import useStripePayment from "../hooks/useStripePayment";
import { initialCheckoutValues } from "../constants/initialValues";
import { checkoutSchema } from "../constants/schemas";
const Checkout = () => {
  const {
    handleFormSubmit,
    setActiveStep,
    activeStep,
    isFirstStep,
    isSecondStep,
    loading,
    error,
    errorMessage,
    setError,
  } = useStripePayment();

  return (
    <main style={{ width: "80%", margin: "40px auto" }}>
      <ErrorToast
        error={error}
        errorMessage={errorMessage}
        setError={setError}
      />
      <Seo title="Checkout" canonicalUrl="/checkout" />
      <Stepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </Stepper>
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
                    disabled={loading}
                    sx={{
                      backgroundColor: shades.primary[200],
                      boxShadow: "none",
                      color: "white",
                      borderRadius: 0,
                      padding: "15px 40px",
                    }}
                  >
                    {loading ? <CircularProgress size={22}/> : "Place Order"}
                  </Button>
                ) : null}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default Checkout;
