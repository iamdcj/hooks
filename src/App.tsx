import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import BasicToggle from "./Hooks/BasicToggle";

const App = () => {
  return (
    <Router>
      <main>
        <nav>
          <h3>Hooks Navigation</h3>
          <ul>
            <li>
              <Link to="/basic-toggle">Basic Toggle</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/basic-toggle">
            <BasicToggle />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
