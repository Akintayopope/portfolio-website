import "./Work.css";
import { Image } from "../../components/Image/Image";
import { Button } from "../../components/Button/Button";
import { Typography } from "../../components/Typography/Typography";

const projects = [
  {
    title: "Prairie Naturals – E-Commerce Platform",
    description:
      "A full e-commerce store built with Ruby on Rails featuring product listings, category filtering, cart system, tax calculation, PDF invoices, ActiveAdmin dashboard, and realistic seeded data.",
    image: "/project-prairie.png",
    tech: [
      "Ruby on Rails",
      "PostgreSQL",
      "ActiveAdmin",
      "Devise",
      "ActiveStorage",
    ],
    link: "https://github.com/Akintayopop/Prairie_Naturals",
  },

  {
    title: "CityTrack Winnipeg – Civic Data Dashboard",
    description:
      "A dashboard visualizing municipal data including expenses, categories, and departmental spending. Built with Rails + Postgres + chart visualizations.",
    image: "/project-citytrack.png",
    tech: ["Rails", "PostgreSQL", "Charts.js", "Bootstrap"],
    link: "https://github.com/Akintayopop/citytrack_winnipeg",
  },

  {
    title: "Node Farm – Node.js Mini Project",
    description:
      "A Node.js project demonstrating routing, file reading, dynamic templates, and simple product rendering using vanilla Node without frameworks.",
    image: "/project-nodefarm.png",
    tech: ["Node.js", "FileSystem", "HTTP Module"],
    link: "https://github.com/Akintayopop/node-farm",
  },

  {
    title: "CuisineHub CMS – PHP Content Management System",
    description:
      "A PHP content management system for managing cuisines, recipes, and dishes. Includes authentication, admin dashboard, CRUD features, MySQL PDO backend, and responsive Bootstrap UI.",
    image: "/project-cuisinehub.png",
    tech: ["PHP", "MySQL", "PDO", "Bootstrap", "Authentication"],
    link: "https://github.com/Akintayopop/CuisineHub-CMS",
  },

  {
    title: "Flask Image Processing API",
    description:
      "A backend API built with Flask that processes images, validates file uploads, supports multiple transformations, and returns structured JSON responses. Demonstrates backend engineering and practical computer vision.",
    image: "/project-flask.png",
    tech: ["Python", "Flask", "Pillow/OpenCV", "REST API"],
    link: "https://github.com/Akintayopop/flask-image-api",
  },

  {
    title: "Winnipeg Burial Dashboard – Data Visualization Project",
    description:
      "A data analytics dashboard that cleans, transforms, and visualizes burial records in Winnipeg using modern Python tools. Designed for structured reporting and insights.",
    image: "/project-winnipeg.png",
    tech: ["Python", "Pandas", "Plotly", "Dash"],
    link: "https://github.com/Akintayopop/winnipeg-burial-dashboard",
  },
];

export default function Work() {
  return (
    <section className="work">
      <Typography size="xl" weight="bold" className="work-title">
        My Projects
      </Typography>

      <Typography size="lg" muted className="work-desc">
        A curated selection of projects I’ve built across full-stack
        development, backend engineering, data visualization, and secure web
        systems.
      </Typography>

      <div className="filter-tabs">
        <button className="filter-btn active" data-filter="all">
          All Projects
        </button>
        <button className="filter-btn" data-filter="cs">
          Python
        </button>
        <button className="filter-btn" data-filter="web">
          Web Development
        </button>
        <button className="filter-btn" data-filter="ai">
          Database
        </button>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div className="work-card" key={index}>
            <Image
              src={project.image}
              alt={project.title}
              width="400px%"
              height="280px"
              rounded={true}
            />

            <Typography size="lg" weight="bold" className="project-title">
              {project.title}
            </Typography>

            <Typography muted className="project-desc">
              {project.description.length > 90
                ? project.description.slice(0, 90) + "..."
                : project.description}
            </Typography>

            <ul className="tech-list">
              {project.tech.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>

            <div className="button-wrapper">
              <Button
                label="View Project"
                className="project-button"
                onClick={() => window.open(project.link, "_blank")}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
