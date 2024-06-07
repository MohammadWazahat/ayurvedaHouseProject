import React, { useState } from "react";
import './ToggleLikeButton.css'
import { FaRegThumbsDown } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";

const ToggleLikeButton = () => {
    const [activeBtn, setActiveBtn] = useState("none");

    const handleLikeClick = () => {
      if (activeBtn === "none") {
        setActiveBtn("like");
        return;
      }
  
      if (activeBtn === "like") {
        setActiveBtn("none");
        return;
      }
  
      if (activeBtn === "dislike") {
        setActiveBtn("like");
      }
    };
  
    const handleDisikeClick = () => {
      if (activeBtn === "none") {
        setActiveBtn("dislike");
        return;
      }
  
      if (activeBtn === "dislike") {
        setActiveBtn("none");
        return;
      }
  
      if (activeBtn === "like") {
        setActiveBtn("dislike");
      }
    };
  return (
    <>

      <div>
        <div className="flex items-center">
          <button
            className={`btn ${activeBtn === "like" ? "like-active" : ""}`}
            onClick={handleLikeClick}
          >
           
           <FaRegThumbsDown /> <span className="mx-2">No</span> 
          </button>

          <button
            className={`btn ${activeBtn === "dislike" ? "dislike-active" : ""}`}
            onClick={handleDisikeClick}
          >
           <FaRegThumbsUp /><span className="mx-2">Yes</span>  
          </button>
        </div>
      </div>
      
    </>
  )
}

export default ToggleLikeButton
