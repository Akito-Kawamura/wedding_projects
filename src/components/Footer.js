import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Grid from "@material-ui/core/Grid";
import HomeIcon from "@material-ui/icons/Home";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles({
  footerBar: {
    backgroundColor: "black",
    textAlign: "center",
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100vw"
  },
  icons: {
    fontSize: "40",
    color: "white"
  },
  labels: {
    color: "white"
  }
});

export default function Footer() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.footerBar}
    >
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<HomeIcon className={classes.icons} />}
          />
        </Grid>
        <Grid item xs={3}>
          <BottomNavigationAction
            label="Messages"
            value="message"
            icon={<EmailIcon className={classes.icons} />}
          />
        </Grid>
        <Grid item xs={3}>
          <BottomNavigationAction
            label="Search"
            value="nearby"
            icon={<SearchIcon className={classes.icons} />}
          />
        </Grid>
        <Grid item xs={3}>
          <BottomNavigationAction
            label="MyPage"
            value="mypage"
            icon={<AccountCircleIcon className={classes.icons} />}
          />
        </Grid>
      </Grid>
    </BottomNavigation>
  );
}
