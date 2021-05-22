import { Grid, Typography } from "@material-ui/core";
import React from "react";

const TitleAndPointsComponent = ({ title, cost }) => {
  return (
    <Grid container>
      <Grid item xs={8}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography>{cost}</Typography>
      </Grid>
    </Grid>
  );
};

export default TitleAndPointsComponent;
