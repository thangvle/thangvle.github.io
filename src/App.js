import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@chakra-ui/core";

import Header from "./components/header";
function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}

export default App;
