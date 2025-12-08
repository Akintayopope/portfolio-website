import "./Hero.css";
import { Image } from "../../components/Image/Image";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Card } from "../../components/Card/Card";
import { MapPin, GraduationCap, Briefcase, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div id="home" className="page-wrapper">
      {/* Background Circles */}
      <div className="bg-animation">
        <div className="bg-circle circle-1" />
        <div className="bg-circle circle-2" />
        <div className="bg-circle circle-3" />
      </div>

      {/* ================= HERO SECTION ================= */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="profile-image-wrapper">
              <Image
                src="/profile.jpg"
                alt="Akintayo"
                width="180px"
                height="180px"
                rounded={true}
                className="profile-image"
              />
            </div>

            <Heading level={1} className="hero-title">
              I’m <span className="name-gradient">Akintayo</span>, a full-stack
              developer.
            </Heading>

            <p className="subtitle">
              Building the future, one line of code at a time.
            </p>

            <p className="hero-description">
              I’m a final-year Full Stack Development student at RRC Polytech
              with real-world experience building scalable, modern web
              applications using JavaScript ecosystems and cloud technologies.
            </p>

            <div className="cta-buttons">
              <Button label="View Projects" variant="gradient" />
              <Button label="Download Resume" variant="secondary" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <div className="container about-grid">
          {/* ================= LEFT SIDEBAR ================= */}
          <aside className="about-sidebar">
            <Card className="about-card" variant="glass">
              <h2>About Me</h2>
              <h3>Full Stack Developer & Cloud Security Enthusiast</h3>

              <p>
                Passionate developer with hands-on experience building front-end
                and back-end applications. Skilled in React, Node.js, cloud
                security, and modern CI/CD workflows.
              </p>

              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <span className="info-label">Location</span>
                <span className="info-value">Winnipeg, Manitoba</span>
              </div>

              <div className="info-item">
                <GraduationCap size={20} className="info-icon" />
                <span className="info-label">Program</span>
                <span className="info-value">Full Stack Web Dev</span>
              </div>

              <div className="info-item">
                <Briefcase size={20} className="info-icon" />
                <span className="info-label">Role</span>
                <span className="info-value">Program Monitor, CRA</span>
              </div>

              <div className="info-item">
                <Sparkles size={20} className="info-icon" />
                <span className="info-label">Experience</span>
                <span className="info-value">4+ Years</span>
              </div>
            </Card>
          </aside>

          {/* ================= RIGHT CONTENT ================= */}
          <main className="content-cards">
            <Card className="content-card" variant="glass">
              <h3>What I Specialize In</h3>
              <p>
                I build modern, responsive web applications using React,
                Node.js, and cloud technologies. I focus on clean architecture,
                performance optimization, and intuitive UI/UX.
              </p>
            </Card>

            <Card className="content-card" variant="glass">
              <h3>Overview</h3>
              <p>
                I turn complex technical challenges into elegant, scalable
                solutions. My approach blends strong analytical ability with
                practical engineering discipline.
              </p>
            </Card>

            <Card className="content-card" variant="glass">
              <h3>Academic Journey</h3>

              <div className="timeline-item">
                <div className="timeline-title">Full Stack Web Development</div>
                <div className="timeline-meta">RRC Polytech • 2022–2025</div>
                <div className="timeline-desc">
                  Comprehensive training in front-end, back-end, databases, web
                  security and cloud computing. Developed multiple real-world
                  applications.
                </div>
              </div>
            </Card>

            <Card className="content-card" variant="glass">
              <div className="timeline-item">
                <div className="timeline-title">Cloud Security</div>
                <div className="timeline-meta">Specialization • 2025</div>
                <div className="timeline-desc">
                  Gained expertise in cloud infrastructure protection, secure
                  deployments, IAM, and DevOps best practices.
                </div>
              </div>
            </Card>

            <Card className="content-card" variant="glass">
              <h3>Who I Am</h3>
              <p>
                Beyond coding, I’m a problem solver and continuous learner. I
                embrace innovation, teamwork, and the desire to build meaningful
                digital products that make real impact.
              </p>
            </Card>
          </main>
        </div>
      </section>
    </div>
  );
}
