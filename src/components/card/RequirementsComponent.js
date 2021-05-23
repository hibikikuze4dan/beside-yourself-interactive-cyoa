import { Grid, Typography } from "@material-ui/core";
import React from "react";

const RequirementsComponent = ({ choice }) => {
  const { requirements, title } = choice;
  const { include } = requirements;
  const isCloseAndPersonal = title === "Close and Personal";
  const cAndPCopy = "the Murder desummon option";
  const willRender = isCloseAndPersonal || !!include;

  return willRender ? (
    <Grid item xs={12}>
      <Typography align="center">
        {"Requires "}
        {isCloseAndPersonal ? cAndPCopy : include[0]}
      </Typography>
    </Grid>
  ) : null;
};

export default RequirementsComponent;
