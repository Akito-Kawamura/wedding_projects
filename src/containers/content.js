import Content from "../components/Content";
import { connect } from "react-redux";
export default connect(
  // mapStateToProps.
  (store) => ({ types: store.sidebar })
)(Content);
