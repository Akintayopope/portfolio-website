import React from "react";
import "./index.css";

function App() {
  return (
    <>
      {/* Animated Background */}
      <div className="bg-blobs">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
        <div className="blob blob-emerald"></div>
      </div>

      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 10 }}>
        {/* Your portfolio sections here */}
        <h1>Akintayo Popoola — Portfolio</h1>
        {/* More sections you will add later */}
      </div>
    </>
  );
}

export default App;
