import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Tabs, Tab } from "@material-ui/core";
import { getSectionLinks, getCurrentTab } from "../js/selectors/index";
import { updateTab } from "../js/actions/index";
import { Link } from "react-router-dom";

export const NavigationTabsBase = props => {
  const { currentTab, sections, onChange } = props;

  return (
    <Fragment>
      <Tabs
        onChange={onChange}
        value={currentTab}
        scrollButtons="desktop"
        variant="scrollable"
      >
        {sections.map(({ label, link }) => {
          const tabLabel = <Link to={`/${link}`}>{label}</Link>;
          return <Tab label={tabLabel} key={link} />;
        })}
      </Tabs>
    </Fragment>
  );
};

const mapDispatchToProps = dispatch => ({
  onChange: (article, value) => dispatch(updateTab(value))
});

const mapStateToProps = state => ({
  sections: getSectionLinks(state),
  currentTab: getCurrentTab(state)
});

export const NavigationTabs = connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationTabsBase);
