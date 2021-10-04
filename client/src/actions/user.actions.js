import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPDATE_BIO = "UPDATE_BIO";
export const FOLLOW_USER = "FOLLOW_USER";
export const UNFOLLOW_USER = "UNFOLLOW_USER";

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, playload: res.data });
      })
      .catch((error) => {
        console.log("error dispatch GET_USER" + error);
      });
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.REACT_APP_API_URL}api/user/upload`, data)
      .then((res) => {
        return axios
          .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
          .then((res) => {
            dispatch({ type: UPLOAD_PICTURE, playload: res.data.picture });
          });
      })
      .catch((error) => console.log("error dispatch"));
  };
};

export const updateBio = (userId, bio) => {
  return (dispatch) => {
    return axios({
      method: "PUT",
      url: `${process.env.REACT_APP_API_URL}api/user/` + userId,
      data: { bio },
    })
      .then((res) => {
        dispatch({
          type: UPDATE_BIO,
          playload: bio,
        });
      })
      .catch((error) => console.log(error));
  };
};

export const followUser = (followerId, idToFollow) => {
  return (dispatch) => {
    return axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}api/user/follow/` + followerId,
      data: { idToFollow },
    })
      .then((res) => {
        console.log("coucou follow");
        dispatch({
          type: "FOLLOW_USER",
          playload: { idToFollow },
        });
      })
      .catch((error) => console.log(error));
  };
};

export const unFollowUser = (followerId, idToUnfollow) => {
  console.log("idtounfollow:  ", idToUnfollow);
  console.log("followerId : ", followerId);
  return (dispatch) => {
    console.log("coucou unfollow");
    return axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_API_URL}api/user/unfollow/` + followerId,
      data: { idToUnfollow },
    })
      .then((res) => {
        console.log("then unfollo");
        dispatch({
          type: "UNFOLLOW_USER",
          playload: { idToUnfollow },
        });
      })
      .catch((error) => console.log(error));
  };
};
