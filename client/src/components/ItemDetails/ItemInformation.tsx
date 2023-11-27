import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ItemType } from "../../types/mongoTypes";
function ItemInformation({ item }: { item: ItemType }) {
  const [value, setValue] = useState<string>("description");
  const handleChange = (
    event: React.SyntheticEvent<Element>,
    newValue: string
  ) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ margin: "20px 0" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="DESCRIPTION" value="description" />
          <Tab label="REVIEWS" value="reviews" />
        </Tabs>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
        {value === "description" && <div>{item?.longDescription}</div>}
        {value === "reviews" && <div>reviews</div>}
      </div>
    </>
  );
}

export default ItemInformation;
