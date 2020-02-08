import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import BasicToggle from "./Hooks/BasicToggle";
import Counter from "./Hooks/Counter";

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
            <li>
              <Link to="/counter">Counter</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/basic-toggle">
            <BasicToggle />
          </Route>
          <Route path="/counter">
            <Counter />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
