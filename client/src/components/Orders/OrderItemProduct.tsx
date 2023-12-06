import { ItemType } from "../../types/mongoTypes";
import { Typography } from "@mui/material";
function OrderItemProduct({
  product,
  count,
}: {
  product: ItemType;
  count: number;
}) {
  return (
    <div style={{ padding: "15px 0px", display: "flex", gap: "20px" }}>
      <div>
        <img
          alt={product?.name}
          width="123px"
          height="164px"
          src={product?.image}
        />
      </div>
      <div>
        <Typography>{product.name}</Typography>
        <Typography fontWeight="bold">${product.price}</Typography>
        <Typography fontWeight="bold">Count: {count}</Typography>
      </div>
    </div>
  );
}

export default OrderItemProduct;
