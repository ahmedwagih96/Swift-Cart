import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { shades } from "../theme";

const Error = ({
  refetch,
  message = "Something Went Wrong",
}: {
  refetch: () => void;
  message?: string;
}) => {
  return (
    <div style={{ margin: "90px auto", width: "80%" }}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {message}
      </Alert>
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: shades.neutral[100],
          fontSize: "16px",
        }}
        onClick={() => {
          refetch();
        }}
      >
        Try Again
      </Button>
    </div>
  );
};

export default Error;
