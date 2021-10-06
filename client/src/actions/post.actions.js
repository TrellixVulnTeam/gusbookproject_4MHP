import axios from "axios";

// posts

export const GET_POSTS = "GET_POSTS";
export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

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

// comments
