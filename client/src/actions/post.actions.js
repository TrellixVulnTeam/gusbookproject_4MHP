import axios from "axios";

// posts

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";

export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

// comments

export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

//errors

export const GET_POST_ERRORS = "GET_POST_ERRORS";

export const getPosts = (num) => {
  return (dispatch) => {
    return axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/post/`,
    })
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_POSTS, playload: array });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    console.log("addpost action");
    //return axios.post(`${process.env.REACT_APP_API_URL}api/post/`, data);
    return axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}api/post/`,
      data: data,
    }).then((res) => {
      console.log(res.data);
      if (res.data) {
        dispatch({ type: GET_POST_ERRORS, playload: res.data });
      } else {
        dispatch({ type: GET_POST_ERRORS, playload: "" });
      }
    });
  };
};

export const likePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}api/post/like-post/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: LIKE_POST, playload: { postId, userId } });
      })
      .catch((error) => console.log(error));
  };
};

export const UnlikePost = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: UNLIKE_POST, playload: { postId, userId } });
      })
      .catch((error) => console.log(error));
  };
};

export const updatePost = (postId, message) => {
  return (dispatch) => {
    return axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
      data: { message },
    })
      .then((res) => {
        dispatch({ type: UPDATE_POST, playload: { message, postId } });
      })
      .catch((error) => console.log(error));
  };
};

export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
    })
      .then((res) => {
        dispatch({ type: DELETE_POST, playload: { postId } });
      })
      .catch((error) => console.log(error));
  };
};
// comments

export const addComment = (postId, commenterId, text, commenterPseudo) => {
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}api/post/comment-post/${postId}`,
      data: { commenterId, text, commenterPseudo },
    })
      .then((res) => {
        dispatch({ type: ADD_COMMENT, playload: { postId } });
      })
      .catch((error) => console.log(error));
  };
};

export const editComment = (postId, commentId, text) => {
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}api/post/edit-comment-post/${postId}`,
      data: { commentId, text },
    })
      .then((res) => {
        dispatch({ type: EDIT_COMMENT, playload: { postId, commentId, text } });
      })
      .catch((error) => console.log(error));
  };
};

export const deleteComment = (postId, commentId) => {
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}api/post/delete-comment-post/${postId}`,
      data: { commentId },
    })
      .then((res) => {
        dispatch({ type: DELETE_COMMENT, playload: { postId, commentId } });
      })
      .catch((error) => console.log(error));
  };
};
