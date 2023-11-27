import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Typography, Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { shades } from "../theme";
import { addToCart } from "../redux/features/cartSlice";
import { Link } from "react-router-dom";
import { ItemType } from "../types/mongoTypes";

const Item = ({ item, width }: { item: ItemType; width: number }) => {
  const dispatch = useDispatch();
  const [count, setCount] = useState<number>(1);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div style={{ width: width }}>
      <div
        style={{ position: "relative" }}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <Link to={`/item/${item._id}`}>
          <img
            alt={item.name}
            width="300px"
            height="400px"
            src={item.image}
            style={{ cursor: "pointer" }}
          />
        </Link>
        <div
          style={{ display: isHovered ? "block" : "none" }}
          className="buttons__container"
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              className="item__iconsContainer"
              style={{ backgroundColor: shades.neutral[100] }}
            >
              <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                <RemoveIcon />
              </IconButton>
              <Typography color={shades.primary[300]}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </div>
            <Button
              onClick={() => {
                dispatch(addToCart(item));
              }}
              sx={{ backgroundColor: shades.primary[300], color: "white" }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "3px" }}>
        <Typography variant="subtitle2" color={shades.neutral[700]}>
          {item.category
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, (str) => str.toUpperCase())}
        </Typography>
        <Typography>{item.name}</Typography>
        <Typography fontWeight="bold">${item.price}</Typography>
      </div>
    </div>
  );
};

export default Item;
