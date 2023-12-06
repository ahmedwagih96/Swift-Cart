import { Stepper as MUIStepper, Step, StepLabel } from "@mui/material";

function Stepper({ activeStep }: { activeStep: number }) {
  return (
    <>
      <MUIStepper activeStep={activeStep} sx={{ m: "20px 0" }}>
        <Step>
          <StepLabel>Billing</StepLabel>
        </Step>
        <Step>
          <StepLabel>Payment</StepLabel>
        </Step>
      </MUIStepper>
    </>
  );
}

export default Stepper;
