import { GET_POST_ERRORS } from "../actions/post.actions";
import { GET_USER_ERRORS } from "../actions/user.actions";

const initialState = { postError: [], userError: [] };

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_ERRORS:
      return {
        postError: action.playload,
        userError: [],
      };
    case GET_USER_ERRORS:
      return {
        userError: action.playload,
        postError: [],
      };
    default:
      return state;
  }
}
