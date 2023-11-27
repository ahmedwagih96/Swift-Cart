import { Badge, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
import { setIsCartOpen } from "../../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
function Navbar() {
  const dispatch = useAppDispatch();
  const { cart, totalPrice } = useAppSelector((state) => state.cartSlice);
  console.log(cart);
  console.log(totalPrice)
  return (
    <nav className="header__nav">
      <IconButton sx={{ color: "black" }}>
        <SearchOutlined />
      </IconButton>
      <IconButton sx={{ color: "black" }}>
        <PersonOutline />
      </IconButton>
      <Badge
        color="secondary"
        badgeContent={cart.length}
        invisible={cart.length === 0}
        sx={{
          "& .MuiBadge-badge": {
            right: 5,
            top: 5,
            padding: "0 4px",
            height: "14px",
            minWidth: "13px",
          },
        }}
      >
        <IconButton
          sx={{ color: "black" }}
          onClick={() => dispatch(setIsCartOpen())}
        >
          <ShoppingBagOutlined />
        </IconButton>
      </Badge>
      <IconButton sx={{ color: "black" }}>
        <MenuOutlined />
      </IconButton>
    </nav>
  );
}

export default Navbar;
