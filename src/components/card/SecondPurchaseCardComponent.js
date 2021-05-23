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
import {
  areRequirementsMet,
  getSpecificChoiceFromLocation,
  isChoicePicked,
} from "../../js/selectors";
import RequirementsComponent from "./RequirementsComponent";
import TitleAndPointsComponent from "./TitleAndPointsCompoent";

const CardComponent = ({ data, handleClick }) => {
  const dispatch = useDispatch();
  const { title, description, cost, src, requirements, secondPurchase } = data;
  const picked = useSelector(isChoicePicked)(title);
  const costPicked = useSelector(getSpecificChoiceFromLocation)(title)?.cost;
  const requirementsMet = useSelector(areRequirementsMet)(requirements);
  const disabled = !picked && !requirementsMet;
  const variant = picked ? "outlined" : "elevation";

  return (
    <Card
      style={{
        padding: "24px 16px",
        backgroundColor: "#1D3F5AFF",
        ...(picked && { backgroundColor: "#29a62a" }),
      }}
      component={Card}
      variant={variant}
      disabled={disabled}
    >
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Grid container justify="center">
            <Img
              style={{
                height: "250px",
                border: "1px solid white",
                borderRadius: "12px",
              }}
              key={src}
              src={src}
              loader={<CircularProgress />}
              unloader={"Unable to Load Image"}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TitleAndPointsComponent title={title} cost={cost} />
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="space-around">
            <Button
              variant="outlined"
              onClick={() => dispatch(updateExtraChoice(data))}
              style={{
                border: "1px solid white",
                ...(cost === costPicked && { backgroundColor: "#29a62a" }),
              }}
            >
              {Math.abs(cost)}
            </Button>
            <Button
              variant="outlined"
              onClick={() =>
                dispatch(
                  updateExtraChoice({
                    ...data,
                    cost: secondPurchase,
                  })
                )
              }
              style={{
                border: "1px solid white",
                ...(secondPurchase === costPicked && {
                  backgroundColor: "#29a62a",
                }),
              }}
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
