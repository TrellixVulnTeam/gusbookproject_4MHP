import React from "react";
import LeftNav from "../LeftNav";
import { useSelector } from "react-redux";
import { capitalize } from "../../Util/functions";
import UploadImg from "./UploadImg";

const UpdateProfil = () => {
  const userData = useSelector((state) => state.userReducer);
  // const capitalize = (str) =>
  //   str ? str.charAt(0).toUpperCase() + str.slice(1) : null;
  return (
    <div className="profil-container">
      <LeftNav />
      <h1>Profil de {capitalize(userData.pseudo)}</h1>
      <div className="update-container">
        <div className="left-part">
          <h3>Photo de profil</h3>
          <img src={userData.image} alt="profilImage" />
          <UploadImg />
          {/* <p>{errors.maxSize}</p>
          <p>{errors.format}</p> */}
        </div>
      </div>
    </div>
  );
};

export default UpdateProfil;
