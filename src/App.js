import React from "react";
import { BrowserRouter as Switch, useLocation, Route } from "react-router-dom";
import Main from "./pages/Main";
import Amuletlist from "./pages/Amuletlist";
import Certificate from "./pages/Certificate";
import Login from "./pages/Login";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const location = useLocation();
  return (
    <div>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/" component={Main} />
        <Route exact path="/amuletlist" component={Amuletlist} />
        <Route exact path="/certificate" component={Certificate} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
