import {
  GET_POSTS,
  LIKE_POST,
  UNLIKE_POST,
  UPDATE_POST,
  DELETE_POST,
  EDIT_COMMENT,
  DELETE_COMMENT,
} from "../actions/post.actions";

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
    case UPDATE_POST:
      return state.map((post) => {
        if (post._id === action.playload.postId) {
          return { ...post, message: action.playload.message };
        }
        return post;
      });
    case DELETE_POST:
      return state.filter((post) => post._id !== action.playload.postId);
    case EDIT_COMMENT:
      return state.map((post) => {
        if (post._id === action.playload.postId) {
          return {
            ...post,
            comments: post.comments.map((comment) => {
              if (comment._id === action.playload.commentId) {
                return {
                  ...comment,
                  text: action.playload.text,
                };
              } else return comment;
            }),
          };
        } else return post;
      });
    case DELETE_COMMENT:
      return state.map((post) => {
        if (post._id === action.playload.postId) {
          return {
            ...post,
            comments: post.comments.filter(
              (comment) => comment._id !== action.playload.commentId
            ),
          };
        } else return post;
      });
    default:
      return state;
  }
}
