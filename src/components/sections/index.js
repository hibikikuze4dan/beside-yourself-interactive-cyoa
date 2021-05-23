import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { getLocation, getPotentialRedirectLocation } from "../../js/selectors";
import ArrowNavigationComponent from "../arrow-navigation";
import LayoutComponent from "./LayoutComponent";

const SectionsComponent = () => {
  // Delete line below
  useSelector((state) => console.log(state.data));
  const location = useSelector(getPotentialRedirectLocation);
  console.log();
  return (
    <Grid container style={{ padding: "64px 0" }} spacing={4}>
      <HashRouter>
        <Grid item xs={12}>
          <ArrowNavigationComponent />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route
              path={`/${location}`}
              render={() => {
                return <LayoutComponent />;
              }}
            />
            <Route exact path="/">
              <Redirect to="/opening" />
            </Route>
          </Switch>
        </Grid>
        <Grid item xs={12}>
          <ArrowNavigationComponent />
        </Grid>
      </HashRouter>
    </Grid>
  );
};

export default SectionsComponent;
