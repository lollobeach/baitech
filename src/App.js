import { ThemeProvider } from "@emotion/react";
import "./App.css";

import Router from "./routes";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/overrideTheme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
