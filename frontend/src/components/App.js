import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./misc/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={() => <div>HOME</div>} />
          <Route exact path="/about" component={() => <div>ABOUT</div>} />
          <Route exact path="/contact" component={() => <div>CONTACT</div>} />
          <Route exact path="/store" component={() => <div>STORE</div>} />
          <Route exact path="/sign-in" component={() => <div>SIGN IN</div>} />
          <Route exact path="/sign-up" component={() => <div>SIGN UP</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
