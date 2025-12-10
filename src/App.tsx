import React from 'react';
import './index.css';

import Navbar from './layout/Navbar/Navbar';

// Import React Router
import { Routes, Route } from 'react-router-dom';

// Import your new pages
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import SkillsPage from './pages/SkillsPage';
import ResourcesPage from './pages/ResourcesPage';
import DevSetupPage from './pages/DevSetupPage';
import ContactPage from './pages/ContactPage';
import Footer from './layout/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />

      {/* Background blobs remain global */}
      <div className="bg-blobs">
        <div className="blob blob-purple"></div>
        <div className="blob blob-blue"></div>
        <div className="blob blob-emerald"></div>
      </div>

      <main style={{ position: 'relative', zIndex: 2 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/dev-setup" element={<DevSetupPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
