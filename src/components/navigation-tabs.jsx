import React, { Fragment } from "react";
import { GridList, GridListTile, Tabs } from "@material-ui/core";
import { ChoiceCard } from "./choice-card";
import { SectionTitle } from "./section-title";

export const NavigationTabsBase = props => {
  const { title, description, choices, columns } = props;

  return (
    <Fragment>
      <Tabs></Tabs>
    </Fragment>
  );
};
