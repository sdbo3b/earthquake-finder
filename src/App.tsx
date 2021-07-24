import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./components/events/Events";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route path="/Events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
};

export default App;
