import { ItemDescriptions, ItemInformation, RelatedItems } from "../components";
import { dummyItems } from "../dummyData";

const ItemDetails = () => {
  const item = dummyItems[0];
  return (
    <div style={{ width: "80%", margin: "80px auto" }}>
      {/* ITEM DESCRIPTIONS */}
      <ItemDescriptions item={item} />
      {/* INFORMATION */}
      <ItemInformation item={item} />
      {/* RELATED ITEMS */}
      <RelatedItems items={dummyItems} />
    </div>
  );
};
export default ItemDetails;
