import React from "react";
import { connect } from "react-redux";
import withWidth from "@material-ui/core/withWidth";
import { ChoiceList } from "../components/choice-list";
import {
  getIndependenceSection,
  getIndependeceComponentDecision,
  getCurrentPoints
} from "../js/selectors/index";
import { updateIndependence } from "../js/actions/index";

export const IndependenceBase = props => {
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
      columns={width === "xs" ? 1 : 3}
      onClick={onClick}
      chooseOne={true}
    />
  );
};

const mapStateToProps = state => ({
  section: getIndependenceSection(state),
  decisions: getIndependeceComponentDecision(state),
  points: getCurrentPoints(state)
});

const mapDispatchToProps = dispatch => ({
  onClick: value => dispatch(updateIndependence(value))
});

export const Independence = connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(IndependenceBase));
