import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import UseState from "./Hooks/useState";
import UseRef from "./Hooks/useRef";

const App = () => {
  return (
    <Router>
      <main>
        <header>
          <h1>React Hooks</h1>
          <p>A declarative way to manage state outside of class components.</p>
          <nav>
            <h3>Hooks Navigation</h3>
            <ul>
              <li>
                <Link to="/use-state">Use State</Link>
              </li>

              <li>
                <Link to="/use-ref">Use Ref</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/use-state">
            <UseState />
          </Route>

          <Route path="/use-ref">
            <UseRef />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
