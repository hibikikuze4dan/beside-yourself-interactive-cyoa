import React from "react";
import { connect } from "react-redux";
import withWidth from "@material-ui/core/withWidth";
import { ChoiceList } from "../components/choice-list";
import {
  getPerksSection,
  getPerksComponentDecision,
  getCurrentPoints
} from "../js/selectors/index";
import { updatePerks } from "../js/actions/index";

export const PerksBase = props => {
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
      chooseOne={false}
    />
  );
};

const mapStateToProps = state => ({
  section: getPerksSection(state),
  decisions: getPerksComponentDecision(state),
  points: getCurrentPoints(state)
});

const mapDispatchToProps = dispatch => ({
  onClick: value => dispatch(updatePerks(value))
});

export const Perks = connect(
  mapStateToProps,
  mapDispatchToProps
)(withWidth()(PerksBase));
