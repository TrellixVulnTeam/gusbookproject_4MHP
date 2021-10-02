import React, { useState } from "react";
import LeftNav from "../LeftNav";
import { useSelector, useDispatch } from "react-redux";
import { capitalize, dateParser } from "../../Util/functions";
import UploadImg from "./UploadImg";
import { updateBio } from "../../actions/user.actions";

const UpdateProfil = () => {
  const [bio, setBio] = useState("");
  const [updateForm, setUpdateForm] = useState(false);
  const userData = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const [followingsPopup, setFollowingsPopup] = useState(false);
  const [followersPopup, setFollowersPopup] = useState(false);

  const handleUpdate = () => {
    dispatch(updateBio(userData._id, bio));
    setUpdateForm(false);
  };

  return (
    <div className="profil-container">
      <LeftNav />
      <h1>Profil de {capitalize(userData.pseudo)}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src={userData.picture} alt="profilImage" />
          <UploadImg />
          {/* <p>{errors.maxSize}</p>
          <p>{errors.format}</p> */}
        </div>
        <div className="right-part">
          <div className="bio-update">
            <h3>Bio</h3>
            {updateForm === false && (
              <>
                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                <button onClick={() => setUpdateForm(!updateForm)}>
                  Modifier Bio
                </button>
              </>
            )}
            {updateForm && (
              <>
                <textarea
                  type="text"
                  defaultValue={userData.bio}
                  onChange={(event) => setBio(event.target.value)}
                ></textarea>
                <button onClick={() => handleUpdate()}>
                  Valider les modifications
                </button>
              </>
            )}
          </div>
          <h4>Membre depuis le {dateParser(userData.createdAt)}</h4>
          <h5 onClick={() => setFollowingsPopup(true)}>
            Abonnements :{" "}
            {userData.followings ? userData.followings.length : "0"}
          </h5>
          <h5 onClick={() => setFollowersPopup(true)}>
            Abonnés : {userData.followers ? userData.followers.length : "0"}
          </h5>
        </div>
      </div>
      {followingsPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnés</h3>
            <span onClick={() => setFollowingsPopup(false)} className="cross">
              &#10005;
            </span>
            <ul></ul>
          </div>
        </div>
      )}
      {followersPopup && (
        <div className="popup-profil-container">
          <div className="modal">
            <h3>Abonnements</h3>
            <span onClick={() => setFollowersPopup(false)} className="cross">
              &#10005;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfil;
