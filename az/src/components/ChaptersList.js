import React from "react";

const ChaptersList = () => (
  <div
    style={{
      width: "420px",
      height: "399px",
      position: "absolute",
      top: "363px",
      left: "440px",
      borderRadius: "16px 0px 0px 0px",
    }}
  >
    {["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"].map(
      (chapter, index) => (
        <div
          key={index}
          style={{
            width: "342px",
            height: "82px",
            paddingTop: "25px",
            paddingLeft: "16px",
            paddingRight: "16px",
            paddingBottom: "25px",
            borderBottom: "0.5px solid #ccc",
            display: "flex",
            alignItems: "center",
            color: "#000000",
            fontSize: "20px",
            fontWeight: "500",
            backgroundColor:
              chapter === "Chapter 1" ? "#EFF5FF" : "transparent", // Apply background color only to Chapter 1
          }}
        >
          {chapter}
        </div>
      )
    )}
  </div>
);

export default ChaptersList;
