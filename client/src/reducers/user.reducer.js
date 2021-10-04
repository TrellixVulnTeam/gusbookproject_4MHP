import {
  FOLLOW_USER,
  GET_USER,
  UPDATE_BIO,
  UPLOAD_PICTURE,
  UNFOLLOW_USER,
} from "../actions/user.actions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.playload;
    case UPLOAD_PICTURE:
      return {
        ...state,
        picture: action.playload,
      };
    case UPDATE_BIO:
      return {
        ...state,
        bio: action.playload,
      };
    case FOLLOW_USER:
      return {
        ...state,
        followings: [action.playload.idToFollow, ...state.followings],
      };
    case UNFOLLOW_USER:
      return {
        ...state,
        followings: state.followings.filter(
          (id) => id !== action.playload.idToUnfollow
        ),
      };

    default:
      return state;
  }
}
