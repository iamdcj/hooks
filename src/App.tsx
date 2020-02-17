import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import UseState from "./Hooks/useState";

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
              <Link to="/use-state">Use State</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/use-state">
            <UseState />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
