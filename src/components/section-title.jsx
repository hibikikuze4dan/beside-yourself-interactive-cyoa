import React from "react";
import { Grid, Typography } from "@material-ui/core";

export const SectionTitle = props => {
  const { title, description } = props;

  let descriptionSection = null;
  if (description) {
    descriptionSection = (
      <Grid item>
        <Typography>{description}</Typography>
      </Grid>
    );
  }

  return (
    <Grid>
      <Grid item>
        <Typography>{title}</Typography>
      </Grid>
      {descriptionSection}
    </Grid>
  );
};
