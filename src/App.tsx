import React from "react";
import "./index.css";
import Navbar from "./layout/Navbar/Navbar";
import Hero from "./layout/Hero/Hero";
import Work from "./layout/Work/Work";
import Skills from "./layout/Skills";
import Resources from "./layout/Resources";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <Skills />
      <Resources />
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
