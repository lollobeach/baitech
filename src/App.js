import { ThemeProvider } from "@emotion/react";
import "./App.css";

import Router from "./routes";
import { BrowserRouter } from "react-router-dom";

import { theme } from "./theme/overrideTheme";
import { Helmet } from "react-helmet";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div>
          <Helmet>
            <meta
              name="description"
              content="What if it was possible to simulate gene editing?"
            />
          </Helmet>
        </div>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
