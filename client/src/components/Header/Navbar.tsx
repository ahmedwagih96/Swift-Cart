import { Badge, IconButton } from "@mui/material";
import {
  PersonOutline,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@mui/icons-material";
function Navbar() {
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
        <IconButton sx={{ color: "black" }}>
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
