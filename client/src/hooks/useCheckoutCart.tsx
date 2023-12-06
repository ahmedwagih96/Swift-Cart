import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

function useCheckoutCart() {
  const { cart } = useAppSelector((state) => state.reducers.cartSlice);
  const [isCartEmpty, setIsCartEmpty] = useState<boolean>(true);
  const [pageLoading, setPageLoading] = useState<boolean>(true);
  useEffect(() => {
    if (cart.length) setIsCartEmpty(false);
    setPageLoading(false)
  }, []);
  return { isCartEmpty, pageLoading, cart };
}

export default useCheckoutCart;
