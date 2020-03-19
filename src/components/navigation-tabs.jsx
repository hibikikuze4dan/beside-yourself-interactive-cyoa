import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Grid, Button } from "@material-ui/core";
import {
  getSectionLinks,
  getCurrentTab,
  getCurrentPoints
} from "../js/selectors/index";
import { updateTab } from "../js/actions/index";
import { Link } from "react-router-dom";

export const NavigationTabsBase = props => {
  const { currentTab, sections, onChange, points } = props;

  return (
    <Grid container style={{ position: 'sticky' }}>
      <Grid item xs={1}>
        <Button fullWidth style={{ minWidth: "unset", height: "100%" }}>
          {points}
        </Button>
      </Grid>
      <Grid item xs={11}>
        <Tabs
          onChange={onChange}
          value={currentTab}
          scrollButtons="desktop"
          variant="scrollable"
        >
          {sections.map(({ label, link }) => {
            const tabLabel = (
              <Button component={Link} to={`/${link}`}>
                {label}
              </Button>
            );
            return <Tab label={tabLabel} key={link} />;
          })}
        </Tabs>
      </Grid>
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  onChange: (article, value) => dispatch(updateTab(value))
});

const mapStateToProps = state => ({
  sections: getSectionLinks(state),
  currentTab: getCurrentTab(state),
  points: getCurrentPoints(state)
});

export const NavigationTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationTabsBase);
