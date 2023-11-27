import { Button, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { shades } from "../../theme";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { CartItem } from "../";
import { setIsCartOpen } from "../../redux/features/cartSlice";

const CartMenu = () => {
  const dispatch = useAppDispatch();
  const { isCartOpen, cart, totalPrice } = useAppSelector(
    (state) => state.cartSlice
  );
  return (
    <div
      className="cartMenu"
      style={{ display: isCartOpen ? "block" : "none" }}
    >
      <div className="cartMenu__container">
        <div style={{ padding: "30px", overflow: "auto", height: "100%" }}>
          {/* HEADER */}
          <div className="flexbox" style={{ marginBottom: "15px" }}>
            <Typography variant="h3">SHOPPING BAG {cart.length} </Typography>
            <IconButton onClick={() => dispatch(setIsCartOpen())}>
              <CloseIcon />
            </IconButton>
          </div>
          {/* CART LIST */}
          <div>
            {cart.map((item) => (
              <CartItem item={item} key={item._id} />
            ))}
          </div>
          {/* ACTIONS */}
          <div style={{ margin: "20px 0px" }}>
            <div className="flexbox" style={{ margin: "20px 0px" }}>
              <Typography fontWeight="bold">SUBTOTAL</Typography>
              <Typography fontWeight="bold">${totalPrice}</Typography>
            </div>
            <Link to="/checkout">
              <Button
                onClick={() => dispatch(setIsCartOpen())}
                sx={{
                  backgroundColor: shades.primary[400],
                }}
                className="cartMenu__button"
              >
                CHECKOUT
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartMenu;
