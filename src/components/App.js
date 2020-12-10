import React from "react";
import Header from "./Header";
import Sidebar from "../containers/sidebar";
import Content from "../containers/content";
import { lightWhite } from "material-ui/styles/colors";
const App = () => {
  return (
    <div style={styles.main}>
      <div style={styles.side}>
        <Sidebar />
      </div>
      <div style={styles.contents}>
        <Content />
      </div>
      <div style={styles.header}>
        <Header />
      </div>
    </div>
  );
};
export default App;
const styles = {
  main: {
    flex: 1,
    minHeight: "100vh"
  },
  side: {
    width: "20vw",
    position: "fixed",
    minHeight: "80vh",
    top: 44,
    backgroundColor: "lightWhite",
    color: "#666",
    marginTop: "8vh"
  },
  contents: {
    position: "fixed",
    top: 44,
    left: "20vw",
    bottom: 0,
    minHeight: "80vh",
    overflowY: "auto",
    marginTop: "8vh"
  },
  header: {
    position: "fixed",
    width: "100vw",
    height: "10vh",
    right: 0,
    backgroundColor: "balck"
  }
};
