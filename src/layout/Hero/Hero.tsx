import "./Hero.css";
import { Button } from "../../components/Button/Button";
import { Image } from "../../components/Image/Image";

export default function Hero() {
  return (
    <section className="hero hero-centered">
      <div className="hero-inner">
        {/* Profile Image */}
        <div className="hero-img-wrapper">
          <Image
            src="/profile.jpg"
            alt="Profile Photo"
            width="180px"
            height="180px"
            rounded={true}
          />
        </div>

        {/* Heading */}
        <h1 className="hero-title">
          I’m <span className="gradient-text">Akintayo</span>, a full-stack
          developer.
        </h1>

        {/* Description */}
        <p className="hero-desc hero-desc-centered">
          I’m a final-year Full Stack Development student with experience
          building real-world, scalable web applications through hands-on
          projects and modern technologies.
        </p>

        {/* Buttons */}
        <div className="hero-buttons hero-buttons-centered">
          <Button label="View Projects" variant="gradient" />
          <Button label="Download Resume" variant="secondary" />
        </div>
      </div>
    </section>
  );
}
