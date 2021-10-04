import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { followUser, unFollowUser } from "../../actions/user.actions";
import { isEmpty } from "../../Util/functions";

const FollowHandler = ({ idToFollow }) => {
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const [isFollowed, setIsFollowed] = useState(false);

  const handleFollow = () => {
    dispatch(followUser(userData._id, idToFollow));
    setIsFollowed(true);
  };

  const handleUnFollow = () => {
    dispatch(unFollowUser(userData._id, idToFollow));
    setIsFollowed(false);
  };

  useEffect(() => {
    if (!isEmpty(userData.followings)) {
      if (userData.followings.includes(idToFollow)) {
        setIsFollowed(true);
      } else {
        setIsFollowed(false);
      }
    }
  }, [userData, idToFollow]);

  return (
    <>
      {isFollowed && !isEmpty(userData) && (
        <span onClick={handleUnFollow}>
          <button className="unfollow-btn">Abonné</button>
        </span>
      )}
      {isFollowed === false && !isEmpty(userData) && (
        <span onClick={handleFollow}>
          <button className="follow-btn">Suivre</button>
        </span>
      )}
    </>
  );
};

export default FollowHandler;
