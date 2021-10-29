import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import PlanningTools from "./PlanningTools";
import CoEmission from "./CoEmission";
export default function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/index_single_working">
              <CoEmission />
          </Route>
          <Route exact path="/plannig_doc">
            <PlanningTools />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
