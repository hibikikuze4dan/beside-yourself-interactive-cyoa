import React from "react";
import "./App.css";
import { createMuiTheme, Grid, ThemeProvider } from "@material-ui/core";
import SectionsComponent from "./components/sections";
import AppBarComponent from "./components/app-bar";
import BreakdownDialogComponent from "./components/dialogs/breakdown-dialog";
import SaveDialogComponent from "./components/dialogs/save-dialog";

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        color: "white",
      },
    },
    MuiPaper: {
      root: {
        color: "white",
        backgroundColor: "#006466FF",
      },
      outlined: {
        backgroundColor: "inherit",
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid style={{ overflow: "hidden" }}>
        <AppBarComponent />
        <SectionsComponent />
        <BreakdownDialogComponent />
        <SaveDialogComponent />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
