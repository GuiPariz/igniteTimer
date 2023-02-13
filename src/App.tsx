import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/Default";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router/>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
