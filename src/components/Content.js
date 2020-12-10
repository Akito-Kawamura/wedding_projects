import React from "react";
import Home from "./contents/Home";
import About from "./contents/About";
import Entertainments from "./contents/Entertainments";
import Maps from "./contents/Maps";
import Participants from "./contents/Participants";

const Content = (props) => {
  const type = props.types.value;
  console.log("content props", type);
  switch (type) {
    case "HOME":
      return <Home />;
    case "ABOUT":
      return <About />;
    case "ENTERTAINMENTS":
      return <Entertainments />;
    case "MAPS":
      return <Maps />;
    case "PARTICIPANTS":
      return <Participants />;
    default:
      return <Page1 />;
  }
};
export default Content;
