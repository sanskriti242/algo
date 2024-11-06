import React from "react";
import threeBarsIcon from "../images/threeBarsIcon.png";
import dashboardIcon from "../images/dashboardIcon.png";
import learnIcon from "../images/learnIcon.png";
import forumsIcon from "../images/forumsIcon.png";
import upskillIcon from "../images/upskillIcon.png";
import contestIcon from "../images/contestIcon.png";
import leaderboardIcon from "../images/leaderboardIcon.png";

const Sidebar = () => (
  <div
    style={{
      width: "267px",
      height: "566px",
      position: "absolute",
      top: "64px",
      left: "78px",
      backgroundColor: "#FFFFFF",
    }}
  >
    <img
      src={threeBarsIcon}
      alt="Menu"
      style={{
        width: "32px",
        height: "32px",
        position: "absolute",
        top: "68px",
        left: "94px",
        padding: "6.4px 4.8px",
      }}
    />
    <h1
      style={{
        width: "195px",
        height: "40px",
        position: "absolute",
        top: "64px",
        left: "150px",
        color: "#172B4D",
        fontSize: "24px",
        fontWeight: "600",
      }}
    >
      AlgoZenith
    </h1>

    {/* Sidebar Options */}
    <div
      style={{
        width: "168px",
        height: "40px",
        marginLeft: "98px",
        position: "relative",
        marginTop: "163px",
      }}
    >
      {[
        { icon: dashboardIcon, label: "Dashboard" },
        { icon: learnIcon, label: "Learn" },
        { icon: forumsIcon, label: "Forums" },
        { icon: upskillIcon, label: "Upskill", isActive: true },
        { icon: contestIcon, label: "Contest" },
        { icon: leaderboardIcon, label: "Leaderboard" },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px",
            backgroundColor: item.isActive ? "#D6F4FF" : "transparent",
          }}
        >
          <img
            src={item.icon}
            alt={`${item.label} Icon`}
            style={{
              width: "32px",
              height: "32px",
              padding: "4px",
            }}
          />
          <span
            style={{
              width: "79px",
              height: "40px",
              fontFamily: "DM Sans",
              fontSize: "24px",
              fontWeight: "400",
              lineHeight: "40px",
              letterSpacing: "-0.03em",
              textAlign: "left",
              color: "#000000",
              marginLeft: "10px",
            }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  </div>
);

export default Sidebar;
