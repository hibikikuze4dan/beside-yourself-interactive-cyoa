import { Grid, Typography } from "@material-ui/core";
import React from "react";

const BreakdownComponent = ({ title, choices }) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{choices.join(", ")}</Typography>
      </Grid>
    </Grid>
  );
};

export default BreakdownComponent;
