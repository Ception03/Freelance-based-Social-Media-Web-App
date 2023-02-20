import React from "react";
import ProfileLeft from "../ProfileLeft/ProfileLeft";
import ProfileCard from "../ProfileCard/ProfileCard";
import RightSide from "../RightSide/RightSide";
import Posts from "../Posts/Posts";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="Profile">
      <ProfileLeft/>

      <div className="Profile-center">
        <ProfileCard/>
        <Posts/>
      </div>
      
      <RightSide/>
      
    </div>
  );
};

export default Profile;
