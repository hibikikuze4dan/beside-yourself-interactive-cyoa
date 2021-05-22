import { Grid, Typography } from "@material-ui/core";
import React from "react";

const TitleAndPointsComponent = ({ title, cost }) => {
  return (
    <Grid container>
      <Grid item xs={cost !== 0 ? 8 : 12}>
        <Typography>{title}</Typography>
      </Grid>
      {cost !== 0 && (
        <Grid item xs={4}>
          <Typography>
            {"Cost: "}
            {cost < 0 ? "+" : ""}
            {Math.abs(cost)}
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default TitleAndPointsComponent;
