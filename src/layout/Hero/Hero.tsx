import "./Hero.css";
import { Image } from "../../components/Image/Image";
import { Button } from "../../components/Button/Button";
import { Heading } from "../../components/Heading/Heading";
import { Typography } from "../../components/Typography/Typography";
import { Card } from "../../components/Card/Card";

import { MapPin, GraduationCap, Briefcase, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <div id="home" className="page-wrapper">
      {/* ---------------- BACKGROUND ANIMATION ---------------- */}
      <div className="bg-animation">
        <div className="bg-circle circle-1" />
        <div className="bg-circle circle-2" />
        <div className="bg-circle circle-3" />
      </div>

      {/* ---------------- HERO SECTION ---------------- */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            {/* PROFILE IMAGE */}
            <Image
              src="/profile.jpg"
              alt="Akintayo"
              width="180px"
              height="180px"
              rounded
              className="profile-image"
            />

            {/* MAIN HEADING */}
            <Heading level={1} className="hero-title">
              I’m <span className="name-gradient">Akintayo</span>, a full-stack
              developer.
            </Heading>

            {/* SUBTITLE */}
            <Typography size="lg" muted className="subtitle">
              Building the future, one line of code at a time.
            </Typography>

            {/* DESCRIPTION */}
            <Typography className="hero-description">
              I’m a final-year Full Stack Development student at RRC Polytech
              with real-world experience building scalable, modern applications
              using JavaScript ecosystems and cloud technologies.
            </Typography>

            {/* CTA BUTTONS */}
            <div className="cta-buttons">
              <Button
                label="View Projects"
                variant="gradient"
                onClick={() =>
                  window.open("https://github.com/apopoola2", "_blank")
                }
              />

              <Button
                label="Download Resume"
                variant="secondary"
                href="/resume.pdf"
                download="Akintayo-Popoola-Resume.pdf"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section id="about" className="about-section">
        <div className="container about-grid">
          {/* LEFT SIDEBAR ABOUT CARD */}
          <aside className="about-sidebar">
            <Card variant="glass" className="about-card">
              <Heading level={2}>Basic Information</Heading>

              <Typography size="md" muted>
                Full Stack Developer & Cloud Security Enthusiast
              </Typography>

              <Typography muted>
                I’m a passionate developer with practical experience across
                front-end and back-end development. My core skills include
                React, Node.js, cloud security, and CI/CD workflows. I’m
                currently deepening my knowledge in cloud security, refining
                CI/CD automation practices, and building modern full-stack
                applications.
              </Typography>

              {/* INFO ITEMS */}
              <div className="info-item">
                <MapPin size={20} className="info-icon" />
                <Typography size="sm" muted>
                  Location
                </Typography>
                <Typography size="sm">Winnipeg, Manitoba</Typography>
              </div>

              <div className="info-item">
                <GraduationCap size={20} className="info-icon" />
                <Typography size="sm" muted>
                  Program
                </Typography>
                <Typography size="sm">Full Stack Web Dev</Typography>
              </div>

              <div className="info-item">
                <Briefcase size={20} className="info-icon" />
                <Typography size="sm" muted>
                  Role
                </Typography>
                <Typography size="sm">Program Monitor, CRA</Typography>
              </div>

              <div className="info-item">
                <Sparkles size={20} className="info-icon" />
                <Typography size="sm" muted>
                  Experience
                </Typography>
                <Typography size="sm">4+ Years</Typography>
              </div>
            </Card>
          </aside>

          {/* ---------------- RIGHT CONTENT CARDS ---------------- */}
          <main className="content-cards">
            <Card variant="glass" className="content-card">
              <Heading level={3}>What I Specialize In</Heading>
              <Typography muted>
                I build modern, responsive web applications using React,
                Node.js, and cloud technologies. Clean architecture,
                performance, and great UX.
              </Typography>
            </Card>

            <Card variant="glass" className="content-card">
              <Heading level={3}>Overview</Heading>
              <Typography muted>
                I turn complex technical challenges into elegant, scalable
                solutions. My engineering approach balances analytical thinking
                with creativity. Beyond coding, I'm a problem-solver and
                lifelong learner. I enjoy building meaningful digital products,
                collaborating with teams, and pushing innovation.
              </Typography>
            </Card>

            <Card variant="glass" className="content-card">
              <Heading level={3}>Academic Journey</Heading>

              <Typography weight="bold">Full Stack Web Development</Typography>
              <Typography size="sm" muted>
                RRC Polytech • 2022–2025
              </Typography>
              <Typography muted>
                Comprehensive training in front-end, back-end, databases, web
                security, cloud computing. Built multiple real-world
                applications.
              </Typography>
            </Card>

            <Card variant="glass" className="content-card">
              <Heading level={3}>Cloud Security</Heading>
              <Typography size="sm" muted>
                Specialization • 2025
              </Typography>
              <Typography muted>
                Expertise in cloud infrastructure protection, secure
                deployments, IAM, and DevOps best practices.
              </Typography>
            </Card>
          </main>
        </div>
      </section>
    </div>
  );
}
