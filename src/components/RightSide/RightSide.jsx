import React, {useState} from "react";
import "./RightSide.css";
import Home from '../../img/home.png';
import Noti from '../../img/noti.png';
import Comment from '../../img/comment.png';
import {UilSetting} from '@iconscout/react-unicons'
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../shareModal/shareModal";

const RightSide = () => {

  const [modalopened, setModalOpened] = useState(false)

  return <div className="RightSide">
    <div className="navIcons">
        <img src={Home} alt="" />
        <UilSetting/>
        <img src={Noti} alt="" />
        <img src={Comment} alt="" />
    </div>
    <TrendCard/>

    <button className="button r-share-button" onClick={()=> setModalOpened(true)}>
        
        Share
    </button>
    <ShareModal
        modalOpened={modalopened}
        setModalOpened={setModalOpened}/>
  </div>;
};

export default RightSide;
