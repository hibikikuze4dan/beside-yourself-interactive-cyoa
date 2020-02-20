import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { NavigationTabs } from "./components/navigation-tabs";
import { Summoning } from "./sections/summoning";
import { Desummoning } from "./sections/desummoning";

function App() {
  return (
    <Router>
      <NavigationTabs />
      <Switch>
        <Route path="/summoning">
          <Summoning />
        </Route>
        <Route path="/desummoning">
          <Desummoning />
        </Route>
        <Route path="/torn">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
