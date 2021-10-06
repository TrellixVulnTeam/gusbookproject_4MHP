import React, { useEffect, useState, useContext } from "react";
import UidContext from "../AppContext";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { useDispatch } from "react-redux";
import { likePost } from "../../actions/post.actions";
import { UnlikePost } from "../../actions/post.actions";

const LikeButton = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const uid = useContext(UidContext);
  const dispatch = useDispatch();

  const handleLike = () => {
    dispatch(likePost(post._id, uid));
    setLiked(true);
  };

  const handleUnLike = () => {
    dispatch(UnlikePost(post._id, uid));
    setLiked(false);
  };

  useEffect(() => {
    if (post.likers.includes(uid)) setLiked(true);
    else setLiked(false);
  }, [uid, post.likers, liked]);

  return (
    <div className="like-container">
      {uid === null && (
        <Popup
          trigger={<img src="./img/icons/heart.svg" alt="like" />}
          position={["bottom center", "bottom right", "bottom left"]}
          closeOnDocumentClick
        >
          Connectez-vous pour intéragir
        </Popup> // ajouter redirect profil
      )}
      {uid && liked === false && (
        <img onClick={handleLike} src="./img/icons/heart.svg" alt="like" />
      )}
      {uid && liked && (
        <img
          onClick={handleUnLike}
          src="./img/icons/heart-filled.svg"
          alt="like filed"
        />
      )}
      <span>{post.likers.length}</span>
    </div>
  );
};

export default LikeButton;
