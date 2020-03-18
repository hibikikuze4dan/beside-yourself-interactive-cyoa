import React, { Fragment } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { ChoiceCard } from "./choice-card";
import { SectionTitle } from "./section-title";

export const ChoiceList = props => {
  const {
    chooseOne,
    decisions,
    title,
    description,
    choices,
    columns,
    points,
    onClick
  } = props;

  return (
    <Fragment>
      <SectionTitle title={title} description={description} />
      <GridList cellHeight="auto" cols={columns}>
        {choices.toArray().map((choice, index) => (
          <GridListTile key={`${title}-${index}`}>
            <ChoiceCard
              item={choice[1]}
              decisions={decisions}
              points={points}
              onClick={onClick}
              chooseOne={chooseOne}
            />
          </GridListTile>
        ))}
      </GridList>
    </Fragment>
  );
};
