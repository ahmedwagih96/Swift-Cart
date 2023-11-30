import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const Cancellation = () => {
  return (
    <main style={{ margin: "90px auto", width: "80%", height: "50vh" }}>
      <Alert severity="error">
        <AlertTitle>Failure</AlertTitle>
        There was a problem making your payment —{" "}
        <strong>Please contact your bank</strong>
      </Alert>
    </main>
  );
};

export default Cancellation;
