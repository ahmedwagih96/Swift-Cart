import { Typography } from "@mui/material";
import { Seo, LoadingSpinner, CheckoutContent } from "../components";
import useCheckoutCart from "../hooks/useCheckoutCart";
const Checkout = () => {
  const { isCartEmpty, pageLoading, cart } = useCheckoutCart();

  if (pageLoading) return <LoadingSpinner />;

  return (
    <main style={{ width: "80%", margin: "40px auto" }}>
      <Seo title="Checkout" canonicalUrl="/checkout" />
      {isCartEmpty ? (
        <Typography variant="h2" fontWeight="bold">
          Your Cart Is Empty
        </Typography>
      ) : (
        <CheckoutContent cart= {cart}/>
      )}
    </main>
  );
};

export default Checkout;
