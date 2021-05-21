import { Grid } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { getLocation, getPotentialRedirectLocation } from "../../js/selectors";
import ArrowNavigationComponent from "../arrow-navigation";
import OpenerComponent from "../opener";

const SectionsComponent = () => {
  // Delete line below
  useSelector((state) => console.log(state.data));
  const location = useSelector(getPotentialRedirectLocation);
  console.log();
  return (
    <Grid container>
      <HashRouter>
        <ArrowNavigationComponent />
        <Switch>
          <Route
            path={`/${location}`}
            render={() => {
              return <OpenerComponent />;
            }}
          />
          <Route exact path="/">
            <Redirect to="/opening" />
          </Route>
        </Switch>
        <ArrowNavigationComponent />
      </HashRouter>
    </Grid>
  );
};

export default SectionsComponent;
