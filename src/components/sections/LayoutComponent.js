import { Grid } from "@material-ui/core";
import React from "react";
import CardListComponent from "../card-list";
import OpenerComponent from "../opener";

const LayoutComponent = () => {
  return (
    <Grid
      container
      spacing={4}
      style={{ padding: "0 16px", overflow: "hidden" }}
    >
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
