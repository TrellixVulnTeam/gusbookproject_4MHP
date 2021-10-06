import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { isEmpty, timestampParser } from "../../Util/functions";
import FollowHandler from "../../components/profil/FollowHandler";
import { addComment, getPosts } from "../../actions/post.actions";
import EditDeleteComment from "./EditDeleteComment";

const CardComments = ({ post }) => {
  const usersData = useSelector((state) => state.usersReducer);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const handleComment = (event) => {
    event.preventDefault();
    console.log(text);
    if (text) {
      dispatch(addComment(post._id, userData._id, text, userData.pseudo))
        .then(() => {
          dispatch(getPosts());
        })
        .then(() => setText(""));
    }
  };

  return (
    <div className="comments-container">
      {post.comments.map((comment, i) => {
        return (
          <div
            className={
              comment.commenterId === userData._id
                ? "comment-container client"
                : "comment-container"
            }
            key={i}
          >
            <div className="left-part">
              <img
                src={
                  !isEmpty(usersData[0]) &&
                  usersData
                    .map((userFromUsers) => {
                      if (userFromUsers._id === comment.commenterId)
                        return userFromUsers.picture;
                      else return null;
                    })
                    .join("")
                }
                alt="commenter-pic"
              />
            </div>
            <div className="right-part">
              <div className="comment-header">
                <div className="pseudo">
                  <h3>{comment.commenterPseudo}</h3>
                  {comment.commenterId !== userData._id && (
                    <FollowHandler
                      idToFollow={comment.commenterId}
                      type="card"
                    />
                  )}
                </div>
                <span>{timestampParser(comment.timestamp)}</span>
              </div>
              <p>{comment.text}</p>
              <EditDeleteComment comment={comment} postId={post._id} />
            </div>
          </div>
        );
      })}
      {userData._id && (
        <form action="" onSubmit={handleComment} className="comment-form">
          <input
            type="text"
            name="text"
            onChange={(event) => setText(event.target.value)}
            value={text}
            placeholder="Laisser un commentaire"
          />
          <br />
          <input type="submit" value="Envoyer" />
        </form>
      )}
    </div>
  );
};

export default CardComments;
