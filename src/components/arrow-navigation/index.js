import { Button, Grid, withWidth } from "@material-ui/core";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLocation } from "../../js/reducers";
import { getArrowRoutes } from "../../js/selectors";

const ArrowNavigationComponent = ({ width }) => {
  const [leftRoute, rightRoute] = useSelector(getArrowRoutes);
  const isSVP = ["xs", "sm"].includes(width);
  const dispatch = useDispatch();
  return (
    <Grid container justify="space-between">
      <Button
        onClick={() => dispatch(setLocation(leftRoute))}
        startIcon={<ArrowBack />}
        component={Link}
        to={`/${leftRoute}`}
      >
        {isSVP ? "" : leftRoute}
      </Button>
      <Button
        onClick={() => dispatch(setLocation(rightRoute))}
        endIcon={<ArrowForward />}
        component={Link}
        to={`/${rightRoute}`}
      >
        {isSVP ? "" : rightRoute}
      </Button>
    </Grid>
  );
};

export default withWidth()(ArrowNavigationComponent);
