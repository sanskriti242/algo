import React from "react";
import Sidebar from "./components/Sidebar";
import ChaptersList from "./components/ChaptersList";
import LearningContent from "./components/LearningContent";
import Tabs from "./components/Tabs";

const App = () => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div
      style={{ display: "flex", flexDirection: "column", marginLeft: "20px" }}
    >
      <LearningContent />
      <ChaptersList />
      <Tabs />
    </div>
  </div>
);

export default App;
