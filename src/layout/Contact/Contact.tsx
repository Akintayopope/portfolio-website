import "./Contact.css";
import { Card } from "../../components/Card/Card";
import { Heading } from "../../components/Heading/Heading";
import { Typography } from "../../components/Typography/Typography";
import { Button } from "../../components/Button/Button";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <Card variant="glass" className="contact-card">
        <Heading level={2} className="contact-title">
          Let&apos;s Connect
        </Heading>

        <Typography muted className="contact-text">
          I&apos;m always excited to discuss new opportunities, collaborations,
          or just chat about tech. Feel free to reach out!
        </Typography>

        <div className="contact-socials">
          {/* Email */}
          <Button
            variant="circle"
            size="lg"
            href="mailto:akintayopopoola.dev@gmail.com"
            aria-label="Email"
          >
            <Mail />
          </Button>

          {/* GitHub */}
          <Button
            variant="circle"
            size="lg"
            href="https://github.com/Akintayopope"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github />
          </Button>

          {/* LinkedIn */}
          <Button
            variant="circle"
            size="lg"
            href="https://linkedin.com/in/akintayopope"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin />
          </Button>
        </div>
      </Card>

      <footer className="contact-footer">
        © {new Date().getFullYear()} Akintayo Popoola — Built with passion and
        curiosity.
      </footer>
    </section>
  );
}
