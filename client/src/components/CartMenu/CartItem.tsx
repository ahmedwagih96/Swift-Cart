import { Box, Divider, IconButton, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { shades } from "../../theme";
import { ItemType } from "../../types/mongoTypes";
import {
  decreaseCount,
  increaseCount,
  removeFromCart,
} from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
function CartItem({ item }: { item: ItemType }) {
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flexbox" style={{ padding: "15px 0px" }}>
        <Box flex="1 1 40%">
          <img
            alt={item?.name}
            width="123px"
            height="164px"
            src={item?.image}
          />
        </Box>
        <Box flex="1 1 60%">
          <div className="flexbox" style={{ marginBottom: "5px" }}>
            <Typography fontWeight="bold">{item.name}</Typography>
            <IconButton onClick={() => dispatch(removeFromCart(item._id))}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography>{item.shortDescription}</Typography>
          <div className="flexbox" style={{ margin: "15px 0px" }}>
            <Box
              display="flex"
              alignItems="center"
              border={`1.5px solid ${shades.neutral[500]}`}
            >
              <IconButton onClick={() => dispatch(decreaseCount(item._id))}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.price}</Typography>
              <IconButton onClick={() => dispatch(increaseCount(item._id))}>
                <AddIcon />
              </IconButton>
            </Box>
            <Typography fontWeight="bold">${item.price}</Typography>
          </div>
        </Box>
      </div>
      <Divider />
    </>
  );
}
export default CartItem;
