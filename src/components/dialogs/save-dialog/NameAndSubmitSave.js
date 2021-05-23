import { Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSaveTitle } from "../../../js/reducers";
import { getSaveTitle, getDataForSaving } from "../../../js/selectors";
import { handleLocalSaveClick } from "./utils";

const NameAndSubmitSaveComponent = ({ onClose }) => {
  const dispatch = useDispatch();
  const saveTitle = useSelector(getSaveTitle);
  const [saveName, updateSaveName] = useState(saveTitle);
  const dataToSave = useSelector(getDataForSaving);
  const handleClick = () => {
    handleLocalSaveClick(saveName, dataToSave);
    dispatch(updateSaveTitle(saveName));
    onClose();
  };
  return (
    <Grid container justify="space-around">
      <TextField
        style={{ margin: "8px" }}
        label="Save Name"
        value={saveName}
        onChange={(e) => updateSaveName(e.target.value)}
        onKeyUp={(e) => (e.key === "Enter" ? handleClick() : null)}
      />
      <Button variant="outlined" onClick={handleClick}>
        Save
      </Button>
    </Grid>
  );
};

export default NameAndSubmitSaveComponent;
