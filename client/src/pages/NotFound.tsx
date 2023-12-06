import { Typography, Button } from "@mui/material";
import { shades } from "../theme";
import { Link } from "react-router-dom";
import { Seo } from "../components";
function NotFound() {
  return (
    <main
      style={{
        width: "80%",
        margin: "auto",
        paddingTop: "40px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Seo canonicalUrl="/404" title="Not Found" />
      <Typography variant="h3" textAlign="center" marginBottom="50px">
        Page Not Found
      </Typography>
      <Link to="/">
        <Button
          type="submit"
          fullWidth
          color="primary"
          variant="contained"
          sx={{
            backgroundColor: shades.primary[200],
            boxShadow: "none",
            color: "white",
            borderRadius: 0,
            padding: "15px 40px",
            width: "fit-content",
          }}
        >
          Go To Home Page
        </Button>
      </Link>
    </main>
  );
}

export default NotFound;
