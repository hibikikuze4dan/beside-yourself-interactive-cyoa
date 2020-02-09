import React, { Fragment } from "react";
import { GridList, GridListTile } from "@material-ui/core";
import { ChoiceCard } from "./choice-card";
import { SectionTitle } from "./section-title";

export const ChoiceList = props => {
  const { title, description, choices, columns } = props;

  return (
    <Fragment>
      <SectionTitle title={title} description={description} />
      <GridList cellHeight="auto" cols={columns}>
        {choices.map((choice, index) => (
          <GridListTile key={`${title}-${index}`}>
            <ChoiceCard {...choice} />
          </GridListTile>
        ))}
      </GridList>
    </Fragment>
  );
};
