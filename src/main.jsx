import "rsuite/dist/rsuite.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./Store/store";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Utils/theme";
import { CustomProvider } from "rsuite";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CustomProvider theme="theme">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </CustomProvider>
);
