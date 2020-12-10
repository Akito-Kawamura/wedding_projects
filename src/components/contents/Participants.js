import React from "react";
import ParticipantsTabs from "../molecules/Participants/ParticipantsTabs";

const Participants = () => {
  return (
    <div style={styles.contents_container}>
      <h3>Participants</h3>
      <ParticipantsTabs />
    </div>
  );
};
export default Participants;
const styles = {
  contents_container: {
    marginLeft: "5vw",
    marginTop: "5vh"
  }
};
