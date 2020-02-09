import React from "react";
import {
  Grid,
  Card,
  Button,
  CircularProgress,
  Typography
} from "@material-ui/core";
import Img from "react-image";

export const ChoiceCard = props => {
  const { cost, description, onClick, src, title } = props;

  let costLabel = null;
  if (cost) {
    costLabel = cost < 0 ? `Cost: +${Math.abs(cost)}` : `Cost: ${cost}`;
  }

  return (
    <Button onClick={onClick}>
      <Card>
        <Grid item xs={12}>
          <Img
            src={src}
            loader={<CircularProgress />}
            unloader={<CircularProgress />}
          />
        </Grid>
        <Grid container>
          <Grid container item xs={12} justify="space-between">
            <Typography>{title}</Typography>
            <Typography>{costLabel}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </Card>
    </Button>
  );
};
