import { useState } from "react";
import { ItemType } from "../../types/mongoTypes";
import { Button, IconButton, Typography } from "@mui/material";
import { shades } from "../../theme";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addToCart } from "../../redux/features/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

function ItemDescriptions({ item }: { item: ItemType }) {
  const dispatch = useAppDispatch();
  const [count, setCount] = useState<number>(1);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", columnGap: "40px" }}>
      {/* IMAGES */}
      <div style={{ flex: "1 1 40%", marginBottom: "40px" }}>
        <img
          alt={item?.name}
          width="100%"
          height="100%"
          src={item.image}
          style={{ objectFit: "contain" }}
        />
      </div>

      {/* ACTIONS */}
      <div style={{ flex: "1 1 50%", marginBottom: "40px" }}>
        <div style={{ margin: "65px 0 25px 0" }}>
          <Typography variant="h3">{item?.name}</Typography>
          <Typography>${item?.price}</Typography>
          <Typography sx={{ mt: "20px" }}>{item?.longDescription}</Typography>
        </div>

        <div
          style={{ display: "flex", alignItems: "center", minHeight: "50px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: `1.5px solid ${shades.neutral[300]}`,
              marginRight: "20px",
              padding: "2px 5px",
            }}
          >
            <IconButton onClick={() => setCount(Math.max(count - 1, 0))}>
              <RemoveIcon />
            </IconButton>
            <Typography sx={{ p: "0 5px" }}>{count}</Typography>
            <IconButton onClick={() => setCount(count + 1)}>
              <AddIcon />
            </IconButton>
          </div>
          <Button
            sx={{
              backgroundColor: "#222222",
              color: "white",
              borderRadius: 0,
              minWidth: "150px",
              padding: "10px 40px",
            }}
            onClick={() => dispatch(addToCart({ item, count }))}
          >
            ADD TO CART
          </Button>
        </div>
        <div>
          <div style={{ margin: "20px 0 5px 0", display: "flex" }}>
            <FavoriteBorderOutlinedIcon />
            <Typography sx={{ ml: "5px" }}>ADD TO WISHLIST</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDescriptions;
