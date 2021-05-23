import { Dialog, Grid } from "@material-ui/core";
import React, { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../js/reducers";
import {
  getSelectedChoicesForBreakdown,
  isModalOpen,
} from "../../../js/selectors";
import BreakdownComponent from "./BreakdownComponent";

const BreakdownDialogComponent = () => {
  const dispatch = useDispatch();
  const open = useSelector(isModalOpen)("breakdown");
  const handleClose = () => dispatch(toggleModal("breakdown"));
  const choicesForBreakdown = useSelector(getSelectedChoicesForBreakdown);
  return (
    <Dialog open={open} onClose={handleClose}>
      <Grid container spacing={4} style={{ padding: "24px" }}>
        {choicesForBreakdown.map(({ title, choices }) => {
          return (
            <Fragment key={`section-${title}-breakdown`}>
              <Grid item xs={12}>
                <BreakdownComponent title={title} choices={choices} />
              </Grid>
            </Fragment>
          );
        })}
      </Grid>
    </Dialog>
  );
};

export default BreakdownDialogComponent;
