import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { useEffect } from "react";
import { resetCart } from "../redux/features/cartSlice";
import { useAppDispatch } from "../redux/hooks";
const Confirmation = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetCart());
  }, []);
  return (
    <main style={{ margin: "90px auto", width: "80%", height: "50vh" }}>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        You have successfully made an Order —{" "}
        <strong>Congrats on Making your Purchase</strong>
      </Alert>
    </main>
  );
};

export default Confirmation;
