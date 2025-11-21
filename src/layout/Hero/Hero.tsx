import "./Hero.css";
import { Button } from "../../components/Button/Button";
import { Image } from "../../components/Image/Image";

export default function Hero() {
  return (
    <section className="hero">
      {/* Welcome Badge */}
      <div className="welcome-badge">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" />
          <path d="M5 19l1 3 3-1-1-3-3 1z" />
          <path d="M19 5l1 3 3-1-1-3-3 1z" />
        </svg>
        <span>Welcome to my portfolio</span>
      </div>

      {/* Heading */}
      <h1>
        Hi, I’m <span className="gradient-text">Akintayo</span>
      </h1>

      {/* Description */}
      <p className="hero-desc">
        I’m a final-year Full Stack Development student passionate about
        building modern, scalable web applications through hands-on projects and
        real-world experience.
      </p>

      {/* Buttons */}
      <div className="hero-buttons">
        <Button className="btn btn-primary" label="View Projects" />
        <Button className="btn btn-secondary" label="Download Resume" />
      </div>
    </section>
  );
}
