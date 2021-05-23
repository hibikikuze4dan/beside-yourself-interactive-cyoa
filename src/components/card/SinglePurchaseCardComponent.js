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
import RequirementsComponent from "./RequirementsComponent";
import TitleAndPointsComponent from "./TitleAndPointsCompoent";

const SinglePurchaseCardComponent = ({ data, handleClick }) => {
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
      style={{ padding: "24px 16px" }}
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
        <RequirementsComponent choice={data} />
        <Grid item xs={12}>
          <Typography style={{ textTransform: "none" }}>
            <Interweave content={description} />
          </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export default SinglePurchaseCardComponent;
