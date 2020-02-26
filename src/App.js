import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import logo from "./logo.svg";
import "./App.css";
import { NavigationTabs } from "./components/navigation-tabs";
import { Summoning } from "./sections/summoning";
import { Desummoning } from "./sections/desummoning";
import { Posse } from "./sections/posse";
import { Independence } from "./sections/independence";
import { Perks } from "./sections/perks";

function App() {
  return (
    <Router>
      <NavigationTabs />
      <Scrollbars
        autoHide
        autoHideTimeout={2000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax={window.innerHeight}
        thumbMinSize={30}
        universal={true}
      >
        <Switch>
          <Route path="/summoning">
            <Summoning />
          </Route>
          <Route path="/desummoning">
            <Desummoning />
          </Route>
          <Route path="/posse">
            <Posse />
          </Route>
          <Route path="/independence">
            <Independence />
          </Route>
          <Route path="/perks">
            <Perks />
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
      </Scrollbars>
    </Router>
  );
}

export default App;
