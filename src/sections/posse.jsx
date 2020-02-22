import React from "react";
import { connect } from "react-redux";
import withWidth from "@material-ui/core/withWidth";
import { ChoiceList } from "../components/choice-list";
import {
  getPosseSection,
  getPosseComponentDecisions,
  getCurrentPoints
} from "../js/selectors/index";
import { updatePosse } from "../js/actions/index";

export const PosseBase = props => {
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
  section: getPosseSection(state),
  decisions: getPosseComponentDecisions(state),
  points: getCurrentPoints(state)
});

const mapDispatchToProps = dispatch => ({
  onClick: value => dispatch(updatePosse(value))
});

export const Posse = connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(PosseBase));
