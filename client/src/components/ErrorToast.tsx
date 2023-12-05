import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
type ErrorToastProps = {
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage?: string;
  error: boolean;
};
function ErrorToast({
  setError,
  errorMessage = "Something Went Wrong",
  error,
}: ErrorToastProps) {
  const handleCloseAlert = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setError(false);
  };
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={error}
      autoHideDuration={6000}
      onClose={handleCloseAlert}
    >
      <MuiAlert severity="error" onClose={handleCloseAlert} variant="filled">
        {errorMessage}
      </MuiAlert>
    </Snackbar>
  );
}

export default ErrorToast;
