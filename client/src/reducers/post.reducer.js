import { GET_POSTS, LIKE_POST, UNLIKE_POST } from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.playload;
    case LIKE_POST:
      return state.map((post) => {
        if (post._id === action.playload.postId) {
          return {
            ...post,
            likers: [action.playload.userId, ...post.likers],
          };
        }
        return post;
      });
    case UNLIKE_POST:
      return state.map((post) => {
        if (post._id === action.playload.postId) {
          return {
            ...post,
            likers: post.likers.filter((id) => id !== action.playload.userId),
          };
        }
        return post;
      });
    default:
      return state;
  }
}
