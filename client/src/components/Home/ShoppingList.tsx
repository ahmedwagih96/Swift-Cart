import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Item } from "../";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { dummyItems } from "../../dummyData";
const ShoppingList = () => {
  const [value, setValue] = useState<string>("");
  const breakPoint = useMediaQuery("(min-width:600px)");

  const handleChange = (
    event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  const topRatedItems = dummyItems.filter(
    (item) => item.category === "topRated"
  );
  const newArrivalsItems = dummyItems.filter(
    (item) => item.category === "newArrivals"
  );
  const bestSellersItems = dummyItems.filter(
    (item) => item.category === "bestSellers"
  );

  return (
    <div style={{ width: "80%", margin: "80px auto" }}>
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        centered
        TabIndicatorProps={{ sx: { display: breakPoint ? "block" : "none" } }}
        sx={{
          m: "25px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap",
          },
        }}
      >
        <Tab label="ALL" value="" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="BEST SELLERS" value="bestSellers" />
        <Tab label="TOP RATED" value="topRated" />
      </Tabs>
      <div className="items__container">
        {value === ""
          ? dummyItems.map((item) => <Item item={item} key={item._id} />)
          : null}
        {value === "newArrivals"
          ? newArrivalsItems.map((item) => <Item item={item} key={item._id} />)
          : null}
        {value === "bestSellers"
          ? bestSellersItems.map((item) => <Item item={item} key={item._id} />)
          : null}
        {value === "topRated"
          ? topRatedItems.map((item) => <Item item={item} key={item._id} />)
          : null}
      </div>
    </div>
  );
};

export default ShoppingList;
