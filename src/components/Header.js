import React from "react";
import { AppBar, IconButton } from "material-ui";
import FaceIcon from "material-ui/svg-icons/action/face";
const Header = () => {
  return (
    <header style={styles.header}>
      <AppBar
        style={styles.header_bar}
        title="Taro & Hanako"
        iconElementRight={
          <IconButton>
            <FaceIcon />
          </IconButton>
        }
      />
    </header>
  );
};
export default Header;
const styles = {
  header: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: "5vh",
    // background: "black",
    height: "10vh"
  },
  header_bar: {
    height: "100%",
    background: "black"
  }
};
