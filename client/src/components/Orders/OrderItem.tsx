import { OrderType } from "../../types/mongoTypes";
import { Divider } from "@mui/material";
import OrderItemProduct from "./OrderItemProduct";

function OrderItem({ order }: { order: OrderType }) {
  return (
    <>
      <div>
        <p>
          Order Number: <span style={{ fontWeight: "bold" }}>{order._id}</span>
        </p>
      </div>
      <p>
        Order Date:{" "}
        <span style={{ fontWeight: "bold" }}>
          {new Date(order.createdAt).toDateString()}
        </span>
      </p>
      {order.products.map(({ item, count }) => (
        <OrderItemProduct product={item} key={item._id} count={count} />
      ))}
      <p>
        Total: <span style={{ fontWeight: "bold" }}>${order.totalPrice}</span>
      </p>
      <p>
        Status: <span style={{ fontWeight: "bold" }}>{order.status}</span>
      </p>
      <Divider />
    </>
  );
}

export default OrderItem;
