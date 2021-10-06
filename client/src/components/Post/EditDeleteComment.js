import React, { useState, useContext, useEffect } from "react";
import UidContext from "../AppContext";
import { useDispatch } from "react-redux";
import { editComment, deleteComment } from "../../actions/post.actions";

const EditDeleteComment = ({ comment, postId }) => {
  const dispatch = useDispatch();
  const [isAuthor, setIsAuthor] = useState(false);
  const [edit, setEdit] = useState(false);
  const [text, setText] = useState(false);
  const uid = useContext(UidContext);

  const handleEdit = (event) => {
    event.preventDefault();
    if (text) {
      dispatch(editComment(postId, comment._id, text));
      setText("");
      setEdit(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(postId, comment._id));
  };

  useEffect(() => {
    const checkAuthor = () => {
      if (uid === comment.commenterId) {
        setIsAuthor(true);
      }
    };
    checkAuthor();
  }, [uid, comment.commenterId]);
  return (
    <div className="edit-comment">
      {isAuthor && edit === false && (
        <span onClick={() => setEdit(!edit)}>
          <img src="./img/icons/edit.svg" alt="edit" />
        </span>
      )}
      {isAuthor && edit && (
        <form onSubmit={handleEdit} action="" className="edit-comment-form">
          <label htmlFor="text" onClick={() => setEdit(!edit)}>
            Editer
          </label>
          <br />
          <input
            type="text"
            name="text"
            onChange={(event) => setText(event.target.value)}
            defaultValue={comment.text}
          />
          <br />
          <div className="btn">
            <span
              onClick={() => {
                if (window.confirm("Voulez-vous supprimer ce commentaire")) {
                  handleDelete();
                }
              }}
            >
              <img src="./img/icons/trash.svg" alt="trash" />
            </span>
            <input type="submit" value="Valider modifications" />
          </div>
        </form>
      )}
    </div>
  );
};

export default EditDeleteComment;
