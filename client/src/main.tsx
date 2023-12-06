import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme.ts";
import { BrowserRouter } from "react-router-dom";
import { ReduxProvider } from "./redux/provider.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ReduxProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </ReduxProvider>
);
