import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../../actions/post.actions";

const DeleteCard = (props) => {
  // variante au desctructuring

  const dispatch = useDispatch();

  const deleteQuote = () => {
    dispatch(deletePost(props.postId));
  };

  return (
    <div
      onClick={() => {
        if (window.confirm("Voulez-vous supprimer ce post ?")) {
          deleteQuote();
        }
      }}
    >
      <img src="./img/icons/trash.svg" alt="delete" />
    </div>
  );
};

export default DeleteCard;
