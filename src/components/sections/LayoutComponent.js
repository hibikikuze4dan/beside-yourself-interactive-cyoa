import { Grid } from "@material-ui/core";
import React from "react";
import CardListComponent from "../card-list";
import OpenerComponent from "../opener";

const LayoutComponent = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <OpenerComponent />
      </Grid>
      <Grid item xs={12}>
        <CardListComponent />
      </Grid>
    </Grid>
  );
};

export default LayoutComponent;
