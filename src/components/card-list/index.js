import { Grid, GridList, GridListTile, withWidth } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateMultiChoice, updateSingleChoice } from "../../js/reducers";
import {
  getLocationChoicesArray,
  getLocationMulti,
  getPotentialRedirectLocation,
} from "../../js/selectors";
import CardComponent from "../card";

const threeColumnSections = [
  "summoning",
  "desummoning",
  "posse",
  "independence",
  "drawbacks",
];

const CardList = ({ width }) => {
  const dispatch = useDispatch();
  const choices = useSelector(getLocationChoicesArray);
  const location = useSelector(getPotentialRedirectLocation);
  const isMulti = useSelector(getLocationMulti);
  const sectionFunc = isMulti ? updateMultiChoice : updateSingleChoice;
  const isSVP = ["xs", "sm"].includes(width);
  const is3Columns = threeColumnSections.includes(location);
  const nonSVPCols = is3Columns ? 3 : 2;
  const cols = isSVP ? 1 : nonSVPCols;

  return (
    <Grid container>
      <GridList cols={cols} cellHeight="auto">
        {choices.map((choice) => {
          return (
            <GridListTile key={`grid-list-tile-${choice.title}`}>
              <CardComponent
                data={choice}
                handleClick={() => dispatch(sectionFunc(choice))}
              />
            </GridListTile>
          );
        })}
      </GridList>
    </Grid>
  );
};

const CardListComponent = withWidth()(CardList);

export default CardListComponent;
