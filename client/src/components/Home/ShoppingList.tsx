import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Item, Error } from "../";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import CircularProgress from "@mui/material/CircularProgress";
import { useFetchAllItemsQuery } from "../../redux/services/itemsApi";
const ShoppingList = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [tab, setTab] = useState<string>(searchParams.get("category") || "");
  const breakPoint = useMediaQuery("(min-width:600px)");
  const {
    data: items,
    error,
    isLoading,
    refetch,
  } = useFetchAllItemsQuery({ category: searchParams.get("category") || "" });

  const handleChange = (
    _event: React.SyntheticEvent<Element, Event>,
    newValue: string
  ) => {
    setTab(newValue);
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    newValue ? current.set("category", newValue) : current.delete("category");
    const query = current.toString();
    navigate(`/?${query}`);
  };

  if (error) {
    return <Error refetch={refetch} />;
  }

  return (
    <div style={{ width: "80%", margin: "40px auto" }}>
      <Typography variant="h3" textAlign="center">
        Our Featured <b>Products</b>
      </Typography>
      <Tabs
        textColor="primary"
        indicatorColor="primary"
        value={tab}
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
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "150px",
            alignItems: "center",
          }}
        >
          <CircularProgress value={60} />
        </div>
      ) : null}

      <div className="items__container">
        {items?.map((item) => (
          <Item item={item} key={item._id} />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
