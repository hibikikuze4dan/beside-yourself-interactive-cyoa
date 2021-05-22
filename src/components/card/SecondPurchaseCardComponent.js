import {
  Button,
  ButtonGroup,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core";
import Interweave from "interweave";
import React from "react";
import { Img } from "react-image";
import { useDispatch, useSelector } from "react-redux";
import { updateExtraChoice } from "../../js/reducers";
import { areRequirementsMet, isChoicePicked } from "../../js/selectors";
import RequirementsComponent from "./RequirementsComponent";
import TitleAndPointsComponent from "./TitleAndPointsCompoent";

const CardComponent = ({ data, handleClick }) => {
  const dispatch = useDispatch();
  const { title, description, cost, src, requirements, secondPurchase } = data;
  const picked = useSelector(isChoicePicked)(title);
  const requirementsMet = useSelector(areRequirementsMet)(requirements);
  const disabled = !picked && !requirementsMet;
  const variant = picked ? "elevation" : "outlined";

  return (
    <Card component={Card} variant={variant} disabled={disabled}>
      <Grid container spacing={4}>
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
        <Grid item xs={12}>
          <Grid container justify="space-around">
            <Button onClick={() => dispatch(updateExtraChoice(data))}>
              {Math.abs(cost)}
            </Button>
            <Button
              onClick={() =>
                dispatch(
                  updateExtraChoice({
                    ...data,
                    cost: secondPurchase,
                  })
                )
              }
            >
              {Math.abs(secondPurchase)}
            </Button>
          </Grid>
        </Grid>
        <RequirementsComponent choice={data} />
        <Grid item xs={12}>
          <Typography>
            <Interweave content={description} />
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CardComponent;
