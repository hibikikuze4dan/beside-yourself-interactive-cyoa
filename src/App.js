import React from "react";
import "./App.css";
import { createMuiTheme, Grid, ThemeProvider } from "@material-ui/core";
import SectionsComponent from "./components/sections";
import AppBarComponent from "./components/app-bar";
import BreakdownDialogComponent from "./components/dialogs/breakdown-dialog";
import SaveDialogComponent from "./components/dialogs/save-dialog";

const theme = createMuiTheme({
  overrides: {
    MuiFormLabel: {
      root: {
        color: "white",
      },
    },
    MuiInput: {
      root: {
        color: "white",
      },
    },
    MuiInputLabel: {
      root: {
        color: "white",
      },
    },
    MuiFormControlLabel: {
      root: {
        color: "white",
      },
    },
    MuiButton: {
      root: {
        color: "white",
        "&$disabled": {
          color: "grey",
        },
      },
      outlined: {
        backgroundColor: "#1D3F5AFF",
        "&:hover": {
          backgroundColor: "#1D3F5AFF",
        },
      },
      contained: {
        backgroundColor: "#29a62a",
        "&:hover": {
          backgroundColor: "#29a62a",
        },
      },
    },
    MuiPaper: {
      root: {
        color: "white",
        backgroundColor: "#006466FF",
      },
      outlined: {
        backgroundColor: "#1D3F5AFF",
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
