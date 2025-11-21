import React from "react";
import "./index.css";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* Background Animation */}
      <div className="bg-blobs">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
        <div className="blob blob-emerald"></div>
      </div>

      <main style={{ position: "relative", zIndex: 2 }}></main>
    </>
  );
}

export default App;
