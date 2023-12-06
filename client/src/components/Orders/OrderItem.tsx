import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OrderType } from "../../types/mongoTypes";
import {OrderItemProduct} from "../";
import { shades } from "../../theme";
export default function OrderItem({
  order,
  expanded,
  handleChange,
}: {
  order: OrderType;
  expanded: string | false;
  handleChange: (
    panel: string
  ) => (_event: React.SyntheticEvent, isExpanded: boolean) => void;
}) {
  return (
    <div
      style={{
        margin: "15px auto",
        border: `1px solid ${shades.neutral[100]}`,
      }}
    >
      <Accordion
        expanded={expanded === order._id}
        onChange={handleChange(order._id)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${order._id}-content`}
          id={`${order._id}-header`}
        >
          <Typography>{order._id}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {order.products.map(({ item, count }) => (
            <OrderItemProduct product={item} key={item._id} count={count} />
          ))}
          <Typography sx={{ textAlign: "right" }}>
            Total:{" "}
            <span style={{ fontWeight: "bold" }}>${order.totalPrice}</span>
          </Typography>
          <Typography sx={{ textAlign: "right" }}>
            Status: <span style={{ fontWeight: "bold" }}>{order.status}</span>
          </Typography>
          <Typography sx={{ textAlign: "right" }}>
            Date:{" "}
            <span style={{ fontWeight: "bold" }}>
              {" "}
              {new Date(order.createdAt).toDateString()}
            </span>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
