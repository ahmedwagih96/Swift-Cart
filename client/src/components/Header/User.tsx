import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import { LocalGroceryStoreOutlined, LogoutOutlined } from "@mui/icons-material";
import { useAppSelector } from "../../redux/hooks";
import useLogout from "../../hooks/useLogout";
import { ErrorToast } from "..";
import { Link } from "react-router-dom";
export default function User() {
  const { user } = useAppSelector((state) => state.reducers.userSlice);
  const { isError, signOutUser, reset } = useLogout();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <ErrorToast error={isError} setError={reset} />
      <React.Fragment>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ ml: 2, padding: 0, margin: 0 }}
          aria-controls={open ? "account-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Avatar sx={{ width: 32, height: 32 }}>{user?.username[0]}</Avatar>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Link to={`/orders/${user?._id}`}>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <LocalGroceryStoreOutlined fontSize="small" />
              </ListItemIcon>
              My Orders
            </MenuItem>
          </Link>
          <MenuItem
            onClick={() => {
              handleClose();
              signOutUser();
            }}
          >
            <ListItemIcon>
              <LogoutOutlined fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    </>
  );
}
