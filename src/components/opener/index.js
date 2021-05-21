import { Grid, Typography } from "@material-ui/core";
import Interweave from "interweave";
import React from "react";
import { useSelector } from "react-redux";
import { getLocationDescription, getLocationTitle } from "../../js/selectors";

const OpenerComponent = () => {
  const title = useSelector(getLocationTitle);
  const description = useSelector(getLocationDescription);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography align="center">{title}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center">
          <Interweave content={description} />
        </Typography>
      </Grid>
    </Grid>
  );
};

export default OpenerComponent;
