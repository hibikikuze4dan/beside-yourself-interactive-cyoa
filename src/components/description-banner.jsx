import React from "react";
import { Grid, Typography, CircularProgress, Divider } from "@material-ui/core";
import Img from "react-image";

export const DescriptionBanner = props => {
  const { description, src } = props;

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>{description[0]}</Typography>
        <Divider />
        <Typography>{description[1]}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Img
          src={src}
          loader={<CircularProgress />}
          unloader={<CircularProgress />}
        />
      </Grid>
    </Grid>
  );
};
