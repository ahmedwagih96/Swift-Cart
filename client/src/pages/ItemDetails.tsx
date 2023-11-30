import { Error, ItemDescriptions, ItemInformation } from "../components";
import { useFetchItemByIdQuery } from "../redux/services/itemsApi";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
const ItemDetails = () => {
  const params = useParams();
  const {
    data: item,
    error,
    isLoading,
    refetch,
  } = useFetchItemByIdQuery({ id: params.itemId as string });
  if (error) {
    return <Error refetch={refetch} />;
  }
  return (
    <main style={{ width: "80%", margin: "40px auto" }}>
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
      {item ? (
        <>
          {/* ITEM DESCRIPTIONS */}
          <ItemDescriptions item={item} />
          {/* INFORMATION */}
          <ItemInformation item={item} />
        </>
      ) : null}
      
    </main>
  );
};
export default ItemDetails;
