import React from "react";
import { connect } from "react-redux";
import { Dialog } from "@material-ui/core";
import {
  getSectionLinks,
  getCurrentTab,
  getCurrentPoints
} from "../js/selectors/index";

export const ChoicesDialogBase = props => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose}>
      Hello
    </Dialog>
  );
};

const mapStateToProps = state => ({
  sections: getSectionLinks(state),
  currentTab: getCurrentTab(state),
  points: getCurrentPoints(state)
});

export const ChoicesDialog = connect(
  mapStateToProps,
)(ChoicesDialogBase);
