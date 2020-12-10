import Sidebar from "../components/Sidebar";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { home, about, entertainments, maps, participants } from "../Actions";
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      { home, about, entertainments, maps, participants },
      dispatch
    )
  };
};
export default connect(
  // mapStateToProps.
  (store) => ({ types: store.sidebar }),
  mapDispatchToProps
)(Sidebar);
