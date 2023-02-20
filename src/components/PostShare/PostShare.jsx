import React, { useState, useRef } from "react";
import ProfileImage from "../../img/huz.jpg";
import "./PostShare.css";
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons";
import { UilLocationPoint } from "@iconscout/react-unicons";
import { UilSchedule } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";


const PostShare = () => {
  const [image, setImage] = useState(null);
  const imageRef = useRef();
  
  /* here image uploading event is carried */
  const onImageChange = (event) => {
    if(event.target.files && event.target.files[0]){
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }

  };
  /* ------------------------------------------*/

  return (
    <div className="PostShare">
      <img src={ProfileImage} alt="" />
      <div>
        <input type="text" placeholder="What's in your Mind" />

        <div className="postOption">
       
          <div className="option" style={{ color: "var(--photo)" }}
          onClick={()=>imageRef.current.click()}>   

            <UilScenery />
            Photo
          </div>
          <div className="option" style={{ color: "var(--video)" }}>
            <UilPlayCircle />
            Video
          </div>
          <div className="option" style={{ color: "var(--location)" }}>
            <UilLocationPoint />
            Location
          </div>
          <div className="option" style={{ color: "var(--schedule)" }}>
            <UilSchedule />
            Schedule
          </div>
          <button className="button ps-button">Share</button>

          <div style={{ display: "none" }}>
            <input
              type="file"
              name="myImage"
              ref={imageRef}       /* "here" the control is passed by above onClick event  */
              onChange={onImageChange}
            />
          </div>
       
       
        </div>
        {image && (
          <div className="previewImage">
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={image.image} alt="" />  
          </div>
        )}


      </div>
    </div>
  );
};

export default PostShare;
