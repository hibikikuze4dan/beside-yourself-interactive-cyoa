import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  Select,
} from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loadSave, updateSaveTitle } from "../../../js/reducers";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
}));

const SelectSaveAndLoadComponent = ({ onClose }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const saves = JSON.parse(localStorage.getItem("beside_yourself_saves")) || [];
  const [selectedSave, updateSelectedSave] = useState("");
  const handleClick = () => {
    dispatch(
      loadSave(saves.find((save) => save.saveName === selectedSave).saveData)
    );
    dispatch(updateSaveTitle(selectedSave));
    onClose();
  };
  return (
    <Grid container justify="space-around">
      <FormControl className={classes.formControl}>
        <InputLabel color="primary" htmlFor="save-to-load">
          Save to Load
        </InputLabel>
        <Select
          native
          value={selectedSave}
          onChange={(e) => updateSelectedSave(e.target.value)}
          inputProps={{ name: "load", id: "save-to-load" }}
        >
          <option style={{ padding: "4px" }} aria-label="None" value="" />
          {saves.map((save) => {
            return (
              <option
                value={save.saveName}
                key={save.saveName}
                style={{ padding: "4px" }}
              >
                {save.saveName}
              </option>
            );
          })}
        </Select>
      </FormControl>
      <Button variant="outlined" onClick={handleClick}>
        Load
      </Button>
    </Grid>
  );
};

export default SelectSaveAndLoadComponent;
