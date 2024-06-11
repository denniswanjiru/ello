import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "@fontsource/mulish/300.css";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/500.css";
import "@fontsource/mulish/600.css";
import CssBaseline from "@mui/material/CssBaseline";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import theme from "./theme";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
        ,
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
);
