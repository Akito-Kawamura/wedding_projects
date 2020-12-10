import React from "react";
import FlatButton from "material-ui/FlatButton";

const Sidebar = (props) => {
  return (
    <div class="sidebar-container">
      <p>
        <span class="sidebar-title">Contents</span>
      </p>
      <p>
        <FlatButton
          style={styles.sidebarButton}
          label="Home"
          onClick={props.actions.home}
        />
      </p>
      <p>
        <FlatButton
          style={styles.sidebarButton}
          label="About"
          onClick={props.actions.about}
        />
      </p>
      <p>
        <FlatButton
          style={styles.sidebarButton}
          label="Entertainment"
          onClick={props.actions.entertainments}
        />
      </p>
      <p>
        <FlatButton
          style={styles.sidebarButton}
          label="Maps"
          onClick={props.actions.maps}
        />
      </p>
      <p>
        <FlatButton
          style={styles.sidebarButton}
          label="Participant"
          onClick={props.actions.participants}
        />
      </p>
    </div>
  );
};
export default Sidebar;
const styles = {
  title: {
    textAlign: "center",
    color: "#FFFFFF"
  },
  sidebarButton: {
    display: "block",
    width: "100%",
    textAlign: "left",
    textDecoration: "none",
    color: "#666"
  }
};
