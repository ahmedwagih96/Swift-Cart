import { Badge, IconButton, Button } from "@mui/material";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { setIsCartOpen } from "../../redux/features/cartSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import { User } from "..";
function Navbar() {
  const dispatch = useAppDispatch();
  const {
    cartSlice: { cart },
    userSlice: { user },
  } = useAppSelector((state) => state.reducers);
  return (
    <nav className="header__nav">
      <Badge
        color="secondary"
        badgeContent={cart.length}
        invisible={cart.length === 0}
        sx={{
          cursor: 'pointer',
          "& .MuiBadge-badge": {
            right: 5,
            top: 5,
            padding: "0 4px",
            height: "14px",
            minWidth: "13px",
          },
        }}
        onClick={() => dispatch(setIsCartOpen())}
      >
        <IconButton sx={{ color: "black", padding: 0, margin: 0 }}>
          <ShoppingBagOutlined />
        </IconButton>
      </Badge>
      {user ? (
        <User />
      ) : (
        <Link to="/login">
          <Button variant="text" sx={{ margin: 0, padding: "4px 0px 0px" }}>
            Login
          </Button>
        </Link>
      )}
    </nav>
  );
}

export default Navbar;
