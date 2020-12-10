import {
  HOME,
  ABOUT,
  ENTERTAINMENTS,
  MAPS,
  PARTICIPANTS
} from "../constants/ActionTypes";
const initialState = { value: "HOME" };
export default function sidebar(state = initialState, action) {
  switch (action.type) {
    // case PAGE1:
    //   return { value: "PAGE1" };
    case HOME:
      return { value: "HOME" };
    case ABOUT:
      return { value: "ABOUT" };
    case ENTERTAINMENTS:
      return { value: "ENTERTAINMENTS" };
    case MAPS:
      return { value: "MAPS" };
    case PARTICIPANTS:
      return { value: "PARTICIPANTS" };
    default:
      return state;
  }
}
