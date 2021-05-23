import { Button, Dialog, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../../../js/reducers";
import { isModalOpen } from "../../../js/selectors";
import DeleteSavesComponent from "./DeleteSaves";
import NameAndSubmitSaveComponent from "./NameAndSubmitSave";
import SelectSaveAndLoadComponent from "./SelectSaveAndLoad";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  dialog: {
    overflowY: "hidden",
    padding: "24px",
  },
}));

const SaveDialogComponent = () => {
  const isOpen = useSelector(isModalOpen)("save");
  const dispatch = useDispatch();
  const classes = useStyles();
  const onClose = () => dispatch(toggleModal("save"));
  return (
    <Dialog open={isOpen} onClose={onClose} classes={{ paper: classes.dialog }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <NameAndSubmitSaveComponent onClose={onClose} />
        </Grid>
        <Grid item xs={12}>
          <SelectSaveAndLoadComponent onClose={onClose} />
        </Grid>
        <Grid item xs={12}>
          <DeleteSavesComponent onClose={onClose} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default SaveDialogComponent;
