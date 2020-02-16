import React from "react";
import {
  Grid,
  Card,
  Button,
  CircularProgress,
  Typography
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Img from "react-image";

export const ChoiceCardBase = props => {
  const { classes, item, onClick, points, decisions, chooseOne } = props;

  const { cost, description, src, title, requirements } = item.toJS();

  let costLabel = null;
  let costSection = null;
  let titleXS = 12;
  if (cost) {
    titleXS = 6;
    costLabel = cost < 0 ? `Cost: +${Math.abs(cost)}` : `Cost: ${cost}`;
    costSection = (
      <Grid item xs={6}>
        <Typography>{costLabel}</Typography>
      </Grid>
    );
  }

  const requirementsMet = true;
  const costCanBeMet = points >= cost;

  const picked = decisions.indexOf(item);
  let updatedDecisions = null;
  if (picked !== -1) updatedDecisions = decisions.delete(picked);
  else
    updatedDecisions = chooseOne
      ? decisions.set(0, item)
      : decisions.push(item);

  return (
    <Card classes={{ root: classes.root }}>
      <Button
        classes={{ root: `${classes.root}`, label: `${classes.label}` }}
        disabled={!costCanBeMet || !requirementsMet}
        onClick={() => onClick(updatedDecisions)}
        fullWidth
      >
        <Grid item xs={12}>
          <Img
            style={{ height: "300px", width: "100%", objectFit: "fill" }}
            src={src}
            loader={<CircularProgress />}
            unloader={<CircularProgress />}
          />
        </Grid>
        <Grid container>
          <Grid container item xs={12} justify="space-between">
            <Grid item xs={titleXS}>
              <Typography>{title}</Typography>
            </Grid>
            {costSection}
          </Grid>
          <Grid item xs={12}>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </Button>
    </Card>
  );
};

export const ChoiceCardStyles = {
  root: {
    height: "100%",
    display: "block",
    textTransform: "none"
  },
  label: {
    height: "100%"
  }
};

export const ChoiceCard = withStyles(ChoiceCardStyles)(ChoiceCardBase);
