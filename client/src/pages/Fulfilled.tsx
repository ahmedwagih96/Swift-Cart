import { Alert, AlertTitle, Typography } from "@mui/material";
import { LoadingSpinner, Seo } from "../components";
import useFetchOrderToken from "../hooks/useFetchOrderToken";

const Fulfilled = () => {
  const { loading, error } = useFetchOrderToken();

  if (loading) return <LoadingSpinner />;

  return (
    <main style={{ margin: "90px auto", width: "80%" }}>
      <Seo title="Fulfilled" />
      {error ? (
        <Typography variant="h2" fontWeight="bold" mb="15px">
          Invalid Link
        </Typography>
      ) : (
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          You have successfully made an Order —{" "}
          <strong>Congrats on Making your Purchase</strong>
        </Alert>
      )}
    </main>
  );
};

export default Fulfilled;
