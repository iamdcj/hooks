import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UseState from "./Hooks/useState";
import UseRef from "./Hooks/useRef";
// import UseReducer from "./Hooks/useReducer";
// import UseEffect from "./Hooks/useEffect";

import { Container, Drawer, MenuItem } from "@material-ui/core";

const App = () => {
  return (
    <Router>
      <main>
        <Container
          style={{ background: "#e13206", color: "#fff", position: "relative" }}
        >
          <h1>Hooks</h1>

          <Drawer anchor="right" open={true}>
            <nav>
              <MenuItem>
                <Link to="/use-state">Use State</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/use-effect">Use Effect</Link>
              </MenuItem>
              <MenuItem>
                <Link to="/use-ref">Use Ref</Link>
              </MenuItem>

              <MenuItem>
                <Link to="/use-reducer">Use Reducer</Link>
              </MenuItem>
            </nav>
          </Drawer>
        </Container>
        <div>
          <p>A declarative way to manage state outside of class components.</p>
        </div>

        <Switch>
          <Route path="/use-state">
            <UseState />
          </Route>

          <Route path="/use-ref">
            <UseRef />
          </Route>
          {/* 
          <Route path="/use-ref">
            <UseEffect />
          </Route>

          <Route path="/use-reducer">
            <UseReducer />
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
};

export default App;
