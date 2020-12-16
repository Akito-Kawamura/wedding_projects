import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "../containers/sidebar";
import Content from "../containers/content";
const App = () => {
  return (
    <div class="wrapper">
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
        <div style={styles.footer}>
          <Footer />
        </div>
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
    position: "absolute",
    width: "100vw",
    right: 0,
    top: 0,
    backgroundColor: "balck"
  },
  footer: {
    width: "100vw",
    right: 0,
    backgroundColor: "balck",
    marginTop: "auto"
  }
};
