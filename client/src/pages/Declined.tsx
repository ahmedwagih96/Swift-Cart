import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { LoadingSpinner, Seo } from "../components";
import useFetchOrderToken from "../hooks/useFetchOrderToken";
import { Typography } from "@mui/material";
const Declined = () => {
  const { loading, error } = useFetchOrderToken();

  if (loading) return <LoadingSpinner />;
  return (
    <main style={{ margin: "90px auto", width: "80%" }}>
      <Seo title="Declined Payment" />
      {error ? (
        <Typography variant="h2" fontWeight="bold" mb="15px">
          Invalid Link
        </Typography>
      ) : (
        <Alert severity="error">
          <AlertTitle>Payment Declined</AlertTitle>
          There was a problem making your payment —{" "}
          <strong>Please contact your bank</strong>
        </Alert>
      )}
    </main>
  );
};

export default Declined;
