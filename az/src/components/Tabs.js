import React from "react";
import mentorIcon from "../images/mentorIcon.png";
import learningIcon from "../images/learningIcon.png";

const Tabs = () => (
  <div
    style={{
      display: "flex",
      gap: "0px", // Set gap to 0px for the combined container
      width: "563px",
      height: "82px",
      position: "absolute",
      top: "201px",
      left: "440px",
      borderRadius: "14.67px 0px 0px 0px",
      //   backgroundColor: "#D6F4FF",
      border: "1px solid #ccc",
    }}
  >
    {/* Mentor Sessions Tab */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 20px",
        borderRadius: "11px 0px 0px 0px",
        backgroundColor: "#D6F4FF",
        width: "243px",
        height: "61px",
        gap: "12px",
      }}
    >
      <img
        src={mentorIcon}
        alt="Mentor Sessions"
        style={{ width: "32px", height: "32px" }}
      />
      <span>Mentor Sessions</span>
    </div>

    {/* Learning Material Tab */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px 20px",
        borderRadius: "11px 0px 0px 0px",
        width: "243px",
        height: "61px",
        gap: "12px",
      }}
    >
      <img
        src={learningIcon}
        alt="Learning Material"
        style={{ width: "32px", height: "32px" }}
      />
      <span>Learning Material</span>
    </div>
  </div>
);

export default Tabs;
