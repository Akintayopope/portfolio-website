import './Footer.css';
import { Github, Linkedin, Mail, MapPin, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand-header">
              <div className="brand-icon">AP</div>
              <div className="brand-name">Akintayo</div>
            </div>

            <p className="brand-description">
              Full-stack developer specializing in building modern, scalable web
              applications. Currently focusing on cloud security, automation,
              and CI/CD best practices.
            </p>

            <div className="social-links">
              <a
                href="https://github.com/apopoola2"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Github size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/akintayopopoola"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin size={20} />
              </a>

              <a href="mailto:akinpope25@gmail.com" className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <a href="/" className="footer-link">
                Home
              </a>
              <a href="/#about" className="footer-link">
                About
              </a>
              <a href="/work" className="footer-link">
                Work
              </a>
              <a href="/skills" className="footer-link">
                Skills
              </a>
              <a href="/resources" className="footer-link">
                Resources
              </a>
              <a href="/dev-setup" className="footer-link">
                Dev Setup
              </a>
              <a href="/contact" className="footer-link">
                Contact
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3>Get in Touch</h3>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">
                  <MapPin size={18} />
                </div>
                Winnipeg, Manitoba
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Mail size={18} />
                </div>
                apopoola2@rrc.ca
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <Briefcase size={18} />
                </div>
                Open to opportunities
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Akintayo Popoola. All rights reserved.
          </div>

          <div className="footer-bottom-links">
            <a href="/privacy" className="footer-bottom-link">
              Privacy Policy
            </a>
            <a href="/terms" className="footer-bottom-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
