import { Alert, AlertTitle, Typography } from "@mui/material";
import { LoadingSpinner, Seo } from "../components";
import { useParams } from "react-router-dom";
import { useFetchOrderTokenQuery } from "../redux/services/orderApi";
const Fulfilled = () => {
  const { orderToken } = useParams();
  const { isError, isLoading: loading } = useFetchOrderTokenQuery({
    orderToken,
  });
  if (loading) return <LoadingSpinner />;

  return (
    <main style={{ margin: "90px auto", width: "80%" }}>
      <Seo title="Fulfilled" />
      {isError ? (
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
