import React from "react";
import Cover from "../../img/page cover.jpg";
import Profile from "../../img/huz.jpg";
import "./ProfileCard.css";

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>Huzaifa</span>
        <span>Web Developer</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>150</span>
            <span>Followings</span>
          </div>

          <div className="vl"></div>
          <div className="follow">
            <span>2000</span>
            <span>Followers</span>
          </div>

          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>

        <hr />
      </div>
      {ProfilePage? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;
