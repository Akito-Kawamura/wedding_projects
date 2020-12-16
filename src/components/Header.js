import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import HeaderMenu from "./molecules/Header/HeaderMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "Black"
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: "white",
    padding: "0 10px"
  },
  title: {
    flexGrow: 1,
    padding: "0 10px"
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <HeaderMenu className={classes.menuButton} />
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
  );
}
