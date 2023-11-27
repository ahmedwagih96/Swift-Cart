import { Item } from "..";
import { ItemType } from "../../types/mongoTypes";
import { Box, Typography } from "@mui/material";

function RelatedItems({ items }: { items: ItemType[] }) {
  return (
    <div style={{ marginTop: "50px", width: "100%" }}>
      <Typography variant="h3" fontWeight="bold">
        Related Products
      </Typography>
      <Box
        mt="20px"
        display="flex"
        flexWrap="wrap"
        columnGap="1.33%"
        justifyContent="space-between"
      >
        {items.slice(0, 4).map((item, i) => (
          <Item key={`${item.name}-${i}`} item={item} />
        ))}
      </Box>
    </div>
  );
}

export default RelatedItems;
