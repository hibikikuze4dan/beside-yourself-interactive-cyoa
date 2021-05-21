import { Grid, GridList, withWidth } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import {
  getLocationChoicesArray,
  getPotentialRedirectLocation,
} from "../../js/selectors";

const threeColumnSections = [
  "summoning",
  "desummoning",
  "posse",
  "independence",
  "drawbacks",
];

const CardList = ({ width }) => {
  const choices = useSelector(getLocationChoicesArray);
  const location = useSelector(getPotentialRedirectLocation);
  const isSVP = ["xs, sm"].includes(width);
  const is3Columns = threeColumnSections.includes(location);
  const nonSVPCols = is3Columns ? 3 : 2;
  const cols = isSVP ? 1 : nonSVPCols;
  return (
    <Grid container>
      <GridList cols={cols} cellHeight="auto">
        {choices.map((choice) => {
          return <p>{choice.title}</p>;
        })}
      </GridList>
    </Grid>
  );
};

const CardListComponent = withWidth()(CardList);

export default CardListComponent;
