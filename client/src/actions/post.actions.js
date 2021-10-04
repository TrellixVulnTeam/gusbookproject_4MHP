import axios from "axios";

// posts

export const GET_POSTS = "GET_POSTS";

export const getPosts = () => {
  return (dispatch) => {
    return axios({
      method: "GET",
      url: `${process.env.REACT_APP_API_URL}api/post/`,
    })
      .then((res) => {
        dispatch({ type: GET_POSTS, playload: res.data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// comments
