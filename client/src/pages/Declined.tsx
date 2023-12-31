import { Alert, AlertTitle, Typography } from "@mui/material";
import { LoadingSpinner, Seo } from "../components";
import { useParams } from "react-router-dom";
import { useFetchOrderTokenQuery } from "../redux/services/orderApi";
const Declined = () => {
  const { orderToken } = useParams();
  const { isError, isLoading: loading } = useFetchOrderTokenQuery({
    orderToken,
  });
  if (loading) return <LoadingSpinner />;
  return (
    <main style={{ margin: "90px auto", width: "80%" }}>
      <Seo title="Declined Payment" />
      {isError ? (
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
