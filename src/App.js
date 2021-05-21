import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import "./App.css";
import { Grid, Typography } from "@material-ui/core";
import SectionsComponent from "./components/sections";

function App() {
  return (
    <Grid>
      <SectionsComponent />
    </Grid>
  );
}

export default App;
