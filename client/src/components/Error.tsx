import { Button } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { shades } from "../theme";

const Error = ({ refetch }: { refetch: () => void }) => {
  return (
    <div style={{ margin: "90px auto", width: "80%", height: "50vh" }}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Something Went Wrong
      </Alert>
      <Button
        sx={{
          marginTop: "20px",
          backgroundColor: shades.neutral[100],
          fontSize: '16px'
          
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
