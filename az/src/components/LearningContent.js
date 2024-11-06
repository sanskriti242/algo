import React from "react";
import mentorIcon from "../images/mentorIcon.png";
import learningIcon from "../images/learningIcon.png";
import videoIcon from "../images/videoIcon.png";
import articleIcon from "../images/articleIcon.png";
import quizIcon from "../images/quizIcon.png";
import codingIcon from "../images/codingIcon.png";
import resourceIcon from "../images/resourceIcon.png";

// Tabs Component for Mentor Sessions and Learning Material
// const Tabs = () => (
//   <div style={{ display: "flex", marginBottom: "20px" }}>
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         padding: "12px 20px",
//         borderRadius: "11px 0px 0px 0px",
//         backgroundColor: "#D6F4FF",
//         // marginRight: "10px",
//       }}
//     >
//       <img
//         src={mentorIcon}
//         alt="Mentor Sessions"
//         style={{ width: "32px", height: "32px", marginRight: "12px" }}
//       />
//       <span>Mentor Sessions</span>
//     </div>
//     <div
//       style={{
//         display: "flex",
//         alignItems: "center",
//         padding: "12px 20px",
//         borderRadius: "11px 0px 0px 0px",
//         backgroundColor: "#D6F4FF",
//       }}
//     >
//       <img
//         src={learningIcon}
//         alt="Learning Material"
//         style={{ width: "32px", height: "32px", marginRight: "12px" }}
//       />
//       <span>Learning Material</span>
//     </div>
//   </div>
// );

const LearningContent = () => (
  <div
    style={{
      width: "1002px",
      height: "1092px",
      position: "absolute",
      top: "363px",
      left: "814px",
      borderRadius: "16px 0px 0px 0px",
      border: "1px solid #ccc",
      backgroundColor: "#FFFFFF",
      padding: "20px",
    }}
  >
    {/* Tabs */}
    {/* <Tabs /> */}

    {/* Part 1 */}
    <h2>Part 1 - Lorem Ipsum Dolor Sit Amet</h2>
    <div
      style={{
        marginTop: "20px",
        marginBottom: "20px",
        fontSize: "14px",
        color: "#6B7280",
      }}
    >
      <div>Time: 02:00:00 | Difficulty: Medium | Rating: 5</div>
      <div style={{ color: "#32A852", fontWeight: "500" }}>45% Completed</div>
    </div>

    {/* List of content */}
    {[
      { label: "Video 1", icon: videoIcon, duration: "10:00" },
      { label: "Article 1", icon: articleIcon, duration: "10:00" },
      { label: "Quiz 1", icon: quizIcon, duration: "10:00" },
      { label: "Coding Exercise 1", icon: codingIcon, duration: "10:00" },
      { label: "Combined Resource 1", icon: resourceIcon, duration: "10:00" },
    ].map((content, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px",
          borderBottom: index < 4 ? "1px solid #ccc" : "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={content.icon}
            alt={`${content.label} Icon`}
            style={{ width: "24px", height: "24px", marginRight: "10px" }}
          />
          <span
            style={{ fontSize: "16px", fontWeight: "500", color: "#1F2937" }}
          >
            {content.label}
          </span>
        </div>
        <span style={{ fontSize: "14px", color: "#6B7280" }}>
          {content.duration}
        </span>
      </div>
    ))}

    {/* Part 2 and Part 3 */}
    {[2, 3].map((part) => (
      <div
        key={part}
        style={{
          width: "1002px",
          height: "160px",
          borderRadius: "16px 0px 0px 0px",
          border: "1px solid #ccc",
          marginBottom: "10px",
          padding: "20px",
          backgroundColor: "#FFFFFF",
          opacity: 0.8,
        }}
      >
        <h2>Part {part} - Lorem Ipsum Dolor Sit Amet</h2>
      </div>
    ))}
  </div>
);

export default LearningContent;
