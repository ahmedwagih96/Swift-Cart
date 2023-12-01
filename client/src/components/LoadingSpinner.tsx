import CircularProgress from "@mui/material/CircularProgress";
function LoadingSpinner() {
  return (
    <main
      style={{
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </main>
  );
}

export default LoadingSpinner;
