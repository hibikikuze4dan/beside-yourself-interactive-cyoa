import React from "react";
import { connect } from "react-redux";
import withWidth from "@material-ui/core/withWidth";
import { ChoiceList } from "../components/choice-list";
import {
  getSummoningSection,
  getSummoningDecision,
  getPoints
} from "../js/selectors/index";
import { updateSummoning } from "../js/actions/index";

export const SummoningBase = props => {
  const { section, decisions, points, width, onClick } = props;

  const title = section.get("title");
  const description = section.get("description");
  const choices = section.get("choices");

  return (
    <ChoiceList
      title={title}
      description={description}
      choices={choices}
      decisions={decisions}
      points={points}
      columns={width === "xs" || width === "sm" ? 1 : 3}
      onClick={onClick}
      chooseOne={true}
    />
  );
};

const mapStateToProps = state => ({
  section: getSummoningSection(state),
  decisions: getSummoningDecision(state),
  points: getPoints(state)
});

const mapDispatchToProps = dispatch => ({
  onClick: value => dispatch(updateSummoning(value))
});

export const Summoning = connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(SummoningBase));
