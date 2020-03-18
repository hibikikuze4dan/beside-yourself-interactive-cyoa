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
import { requirementsMet, getRequiresString } from "../utils/functions";

export const ChoiceCardBase = props => {
  const { classes, item, onClick, points, decisions, chooseOne } = props;
  const { cost, description, src, title, requirements } = item.toJS();
  const { include, exclude } = requirements;

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

  let requiresLabel = null;
  if (include) {
    requiresLabel = <Typography>{getRequiresString(requirements)}</Typography>;
  }

  const sectionsDecisions = decisions.get("sectionDecisions");
  const otherDecisions = decisions.get("otherDecisions");
  let itemRequirementsMet = true;
  if (include || exclude) {
    itemRequirementsMet = requirementsMet(requirements, otherDecisions);
  }

  const picked = sectionsDecisions.indexOf(item);
  let updatedDecisions = null;
  if (picked !== -1) updatedDecisions = sectionsDecisions.delete(picked);
  else
    updatedDecisions = chooseOne
      ? sectionsDecisions.set(0, item)
      : sectionsDecisions.push(item);

  const isPicked = picked !== -1;

  const costCanBeMet = points >= cost || isPicked;

  return (
    <Card classes={{ root: isPicked ? classes.picked : classes.paper }}>
      <Button
        classes={{ root: `${classes.root}`, label: `${classes.label}` }}
        disabled={!costCanBeMet || !itemRequirementsMet}
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
            {requiresLabel}
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
  paper: {
    height: "100%",
    display: "block",
    textTransform: "none",
    backgroundColor: "green",
    "&:hover": {
      backgroundColor: "green"
    }
  },
  label: {
    height: "100%"
  },
  picked: {
    height: "100%",
    display: "block",
    textTransform: "none",
    backgroundColor: "white"
  }
};

export const ChoiceCard = withStyles(ChoiceCardStyles)(ChoiceCardBase);
