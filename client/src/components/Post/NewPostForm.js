import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { isEmpty, timestampParser } from "../../Util/functions";
import { addPost, getPosts } from "../../actions/post.actions";

const NewPostForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [postPicture, setPostPicture] = useState(null);
  const [video, setVideo] = useState("");
  const [file, setFile] = useState();
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handlePost = async () => {
    if (message || postPicture || video) {
      const data = new FormData();
      data.append("posterId", userData._id);
      data.append("message", message);
      if (file) data.append("file", file);
      data.append("video", video);

      await dispatch(addPost(data));
      dispatch(getPosts());
      cancelPost();
    } else {
      alert("Veuillez entrer un message");
    }
  };

  const handlePicture = (event) => {
    console.log(event.target.files);
    setPostPicture(URL.createObjectURL(event.target.files[0]));
    setFile(event.target.files[0]);
    setVideo("");
  };

  const cancelPost = () => {
    setMessage("");
    setPostPicture(null);
    setVideo("");
    setFile();
  };
  const handleVideo = () => {
    let findLink = message.split(" ");

    for (let i = 0; i < findLink.length; i++) {
      if (
        findLink[i].includes("https://www.yout") ||
        findLink[i].includes("https://yout")
      ) {
        let embed = findLink[i].replace("watch?v=", "embed/");
        setVideo(embed.split("&")[0]);
        findLink.splice(i, 1);
        setMessage(findLink.join(" "));
        setPostPicture("");
      }
    }
  };

  useEffect(() => {
    if (!isEmpty(userData)) setIsLoading(false);
    handleVideo();
  }, [userData, message, video]);

  return (
    <div className="post-container">
      {isLoading ? (
        <i className="fas fa-spinner fa-pulse" />
      ) : (
        <>
          <div className="data">
            <p>
              <span>
                {userData.followings ? userData.followings.length : 0}
              </span>{" "}
              {userData.followings && userData.followings.length > 1
                ? "abonnements"
                : "abonnement"}
            </p>
            <p>
              {userData.followers ? userData.followers.length : 0}
              <span>
                {" "}
                {userData.followers && userData.followers.length > 1
                  ? "abonnés"
                  : "abonnés"}
              </span>
            </p>
          </div>
          <NavLink exact to="/profil">
            <div className="user-info">
              <img src={userData.picture} alt="userPic" />
            </div>
          </NavLink>
          <div className="post-form">
            <textarea
              name="message"
              id="message"
              placeholder="Quoi de neuf ?"
              onChange={(event) => setMessage(event.target.value)}
              value={message}
            />
            {message || postPicture || video.length > 30 ? (
              <li className="card-container">
                <div className="card-left">
                  <img src={userData.picture} alt="user" />
                </div>
                <div className="card-right">
                  <div className="card-header">
                    <div className="pseudo">
                      <h3>{userData.pseudo}</h3>
                    </div>
                    <span>{timestampParser(Date.now())}</span>
                  </div>
                  <div className="content">
                    <p>{message}</p>
                    {postPicture && <img src={postPicture} alt="" />}
                    {video && (
                      <iframe
                        title="video"
                        src={video}
                        frameBorder="0"
                        allow="acceleromter; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      ></iframe>
                    )}
                  </div>
                </div>
              </li>
            ) : null}

            <div className="footer-form">
              <div className="icon">
                {isEmpty(video) && (
                  <>
                    <img src="./img/icons/picture.svg" alt="picIcon" />
                    <input
                      type="file"
                      id="file-upload"
                      name="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={(event) => handlePicture(event)}
                    ></input>
                  </>
                )}
                {video && (
                  <button onClick={() => setVideo("")}>
                    Supprimer la vidéo
                  </button>
                )}
              </div>
              <div className="btn-send">
                {message || postPicture || video.length > 20 ? (
                  <button className="cancel" onClick={cancelPost}>
                    Annuler le message
                  </button>
                ) : null}
                <button className="send" onClick={handlePost}>
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NewPostForm;
