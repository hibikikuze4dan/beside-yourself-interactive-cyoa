import { Grid, Typography } from "@material-ui/core";
import React from "react";

const BreakdownComponent = ({ title, choices }) => {
  return (
    <Grid container>
      <Grid spacing={2} item xs={12}>
        <Typography variant="h5">{title}:</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography>{choices.join(", ")}</Typography>
      </Grid>
    </Grid>
  );
};

export default BreakdownComponent;
