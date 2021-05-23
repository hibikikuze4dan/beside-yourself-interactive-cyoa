import {
  AppBar as ApplicationBar,
  Button,
  Grid,
  Typography,
  withWidth,
} from "@material-ui/core";
import { ListAltRounded, Save } from "@material-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../js/reducers";
import { getCurrentPoints } from "../../js/selectors";

const AppBar = ({ width }) => {
  const dispatch = useDispatch();
  const handleClose = (modalName) => dispatch(toggleModal(modalName));
  const points = useSelector(getCurrentPoints);
  const isSVP = ["xs", "sm"].includes(width);
  return (
    <ApplicationBar style={{ padding: "4px 8px" }}>
      <Grid container>
        <Grid item xs={4}>
          <Button
            title="save/load"
            startIcon={<Save fontSize="large" />}
            onClick={() => handleClose("save")}
            size="large"
          >
            {!isSVP ? "Save/Load" : ""}
          </Button>
        </Grid>
        <Grid item xs={4}>
          <Grid container justify="center">
            <Button
              title="breakdown"
              size="large"
              startIcon={<ListAltRounded />}
              onClick={() => handleClose("breakdown")}
            >
              {isSVP ? "" : "Breakdown"}
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container style={{ height: "100%" }} justify="flex-end">
            <Typography style={{ alignSelf: "center" }}>{points}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </ApplicationBar>
  );
};

const AppBarComponent = withWidth()(AppBar);

export default AppBarComponent;
