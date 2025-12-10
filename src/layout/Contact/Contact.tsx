import './Contact.css';
import { Card } from '../../components/Card/Card';
import { Heading } from '../../components/Heading/Heading';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';

import { Mail, MapPin, Clock, Briefcase } from 'lucide-react';

export default function Contact() {
  return (
    <section className="contact-container" id="contact">
      {/* HEADER */}
      <div className="page-header">
        <Heading level={1} className="page-title">
          Get In Touch
        </Heading>

        <Typography muted className="page-subtitle">
          I'm always open to opportunities, collaborations, or meaningful tech
          conversations. Let's build something amazing together.
        </Typography>
      </div>

      <div className="contact-grid">
        {/* LEFT INFO CARDS */}
        <div className="contact-info">
          <Card variant="glass" className="info-card">
            <div className="info-card-header">
              <div className="info-icon">
                <MapPin size={24} />
              </div>
              <Heading level={3} className="info-title">
                Location
              </Heading>
            </div>
            <Typography muted className="info-content">
              Winnipeg, Manitoba <br /> Canada
            </Typography>
          </Card>

          <Card variant="glass" className="info-card">
            <div className="info-card-header">
              <div className="info-icon">
                <Mail size={24} />
              </div>
              <Heading level={3} className="info-title">
                Email
              </Heading>
            </div>
            <Typography className="info-content">
              <a
                href="mailto:akintayopopoola.dev@gmail.com"
                className="info-link"
              >
                apopoola2@rrc.ca
              </a>
            </Typography>
          </Card>

          <Card variant="glass" className="info-card">
            <div className="info-card-header">
              <div className="info-icon">
                <Briefcase size={24} />
              </div>
              <Heading level={3} className="info-title">
                Status
              </Heading>
            </div>
            <Typography muted className="info-content">
              Open to opportunities <br />
              <span className="availability-dot">
                ● Available for freelance & full-time
              </span>
            </Typography>
          </Card>

          <Card variant="glass" className="info-card">
            <div className="info-card-header">
              <div className="info-icon">
                <Clock size={24} />
              </div>
              <Heading level={3} className="info-title">
                Response Time
              </Heading>
            </div>
            <Typography muted className="info-content">
              Usually within 24–48 hours <br />
              Monday – Friday, 9 AM – 6 PM CST
            </Typography>
          </Card>
        </div>

        {/* RIGHT FORM */}
        <Card variant="glass" className="contact-form-container">
          <Heading level={2} className="form-title">
            Send Me a Message
          </Heading>

          <Typography muted className="form-description">
            Whether you want to discuss a project, explore an idea, or simply
            connect, I'd love to hear from you.
          </Typography>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for your message! I'll get back to you soon.");
              e.currentTarget.reset();
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Your Name *</label>
                <input type="text" required placeholder="John Doe" />
              </div>
              <div className="form-group">
                <label>Your Email *</label>
                <input type="email" required placeholder="john@example.com" />
              </div>
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input type="text" required placeholder="Project Collaboration" />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                required
                placeholder="Tell me about your project or idea..."
              />
            </div>

            <Button variant="gradient" className="submit-btn" type="submit">
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
