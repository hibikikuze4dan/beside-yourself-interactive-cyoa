import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import "./App.css";
import { NavigationTabs } from "./components/navigation-tabs";
import { Summoning } from "./sections/summoning";
import { Desummoning } from "./sections/desummoning";
import { Posse } from "./sections/posse";
import { Independence } from "./sections/independence";
import { Perks } from "./sections/perks";
import { Drawbacks } from "./sections/drawbacks";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <Grid style={{ height: window.innerHeight }}>
      <Router>
        <NavigationTabs />
        <Scrollbars
          autoHide
          autoHideTimeout={5000}
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
            <Route path="/drawbacks">
              <Drawbacks />
            </Route>
          </Switch>
        </Scrollbars>
      </Router>
    </Grid>
  );
}

export default App;
