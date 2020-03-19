import React from "react";
import { connect } from "react-redux";
import { Tabs, Tab, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  getSectionLinks,
  getCurrentTab,
  getCurrentPoints,
  getDialogState
} from "../js/selectors/index";
import { updateTab, updateDialog } from "../js/actions/index";
import { ChoicesDialog } from './choice-dialog'

export const NavigationTabsBase = props => {
  const { currentTab, sections, onChange, points, open, onClick } = props;

  return (
    <Grid container style={{ position: 'sticky', backgroundColor: 'white', top: 0, zIndex: 100 }}>
      <Grid item xs={1}>
        <Button fullWidth style={{ minWidth: "unset", height: "100%" }} onClick={() => onClick('', open)}>
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
      <ChoicesDialog open={open} onClose={onClick} />
    </Grid>
  );
};

const mapDispatchToProps = dispatch => ({
  onChange: (article, value) => dispatch(updateTab(value)),
  onClick: (article, value) => dispatch(updateDialog(!value)),
});

const mapStateToProps = state => ({
  sections: getSectionLinks(state),
  currentTab: getCurrentTab(state),
  points: getCurrentPoints(state),
  open: getDialogState(state),
});

export const NavigationTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationTabsBase);
