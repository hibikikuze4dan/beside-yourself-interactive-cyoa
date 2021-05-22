import {
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import Interweave from "interweave";
import React from "react";
import { Img } from "react-image";
import { useSelector } from "react-redux";
import { areRequirementsMet, isChoicePicked } from "../../js/selectors";
import TitleAndPointsComponent from "./TitleAndPointsCompoent";

const CardComponent = ({ data, handleClick }) => {
  const { title, description, cost, src, requirements } = data;
  const picked = useSelector(isChoicePicked)(title);
  const requirementsMet = useSelector(areRequirementsMet)(requirements);
  const disabled = !picked && !requirementsMet;
  const variant = picked ? "contained" : "outlined";

  return (
    <Button
      fullWidth
      component={Card}
      onClick={handleClick}
      variant={variant}
      disabled={disabled}
    >
      <Grid container>
        <Grid item xs={12}>
          <Img
            style={{ height: "250px" }}
            key={src}
            src={src}
            loader={<CircularProgress />}
            unloader={"Unable to Load Image"}
          />
        </Grid>
        <Grid item xs={12}>
          <TitleAndPointsComponent title={title} cost={cost} />
        </Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}>
          <Typography>
            <Interweave content={description} />
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export default CardComponent;
