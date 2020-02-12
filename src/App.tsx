import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import BasicToggle from "./Hooks/BasicToggle";
import Counter from "./Hooks/Counter";
import Fetch from "./Hooks/Fetch";

const App = () => {
  return (
    <Router>
      <main>
        <h1>React Hooks</h1>
        <p>A declarative way to handle state outside of class components.</p>
        <nav>
          <h3>Hooks Navigation</h3>
          <ul>
            <li>
              <Link to="/basic-toggle">Basic Toggle</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>

            <li>
              <Link to="/fetch">Fetch</Link>
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

          <Route path="/fetch">
            <Fetch />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
