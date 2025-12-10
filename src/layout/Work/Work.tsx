import { useState } from "react";
import "./Work.css";

import { Card } from "../../components/Card/Card";
import { Image } from "../../components/Image/Image";
import { Button } from "../../components/Button/Button";
import { Typography } from "../../components/Typography/Typography";
import { Heading } from "../../components/Heading/Heading";
import { Label } from "../../components/Label/Label";
import { Radio } from "../../components/Radio/Radio";

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
    link: "https://github.com/Akintayopope/Prairie_Naturals",
  },

  {
    title: "CityTrack Winnipeg – Civic Data Dashboard",
    description:
      "A dashboard visualizing municipal data including expenses, categories, and spending. Built with Rails, Postgres, charts, and Bootstrap.",
    image: "/project-citytrack.png",
    tech: ["Rails", "PostgreSQL", "Charts.js", "Bootstrap"],
    link: "https://github.com/Akintayopope/citytrack_winnipeg",
  },

  {
    title: "Node Farm – Node.js Mini Project",
    description:
      "A Node.js project demonstrating routing, file reading, dynamic templates, and basic product rendering without frameworks.",
    image: "/project-nodefarm.png",
    tech: ["Node.js", "FileSystem", "HTTP Module"],
    link: "https://github.com/Akintayopope/node_farm",
  },

  {
    title: "CuisineHub CMS – PHP Content Management System",
    description:
      "A CMS for cuisines and recipes with authentication, admin dashboard, PDO backend, CRUD operations, and Bootstrap UI.",
    image: "/project-cuisinehub.png",
    tech: ["PHP", "MySQL", "PDO", "Bootstrap", "Authentication"],
    link: "https://github.com/Akintayopope/CuisineHub-CMS",
  },

  {
    title: "Flask Image Processing API",
    description:
      "A Flask backend API for image validation, transformation, and JSON response data — demonstrating backend engineering skills.",
    image: "/project-flask.png",
    tech: ["Python", "Flask", "Pillow/OpenCV", "REST API"],
    link: "https://github.com/Akintayopope/Flask-Image-API",
  },

  {
    title: "Winnipeg Burial Dashboard – Data Visualization Project",
    description:
      "A data visualization dashboard built with Pandas, Plotly, and Dash to analyze burial records in Winnipeg.",
    image: "/project-winnipeg.png",
    tech: ["Python", "Pandas", "Plotly", "Dash"],
    link: "https://github.com/Akintayopope/Winnipeg-Burial-Dashboard",
  },
];

export default function Work() {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;

    if (filter === "python")
      return (
        project.tech.includes("Python") ||
        project.tech.includes("Flask") ||
        project.tech.includes("Pandas")
      );

    if (filter === "web")
      return (
        project.tech.includes("Ruby on Rails") ||
        project.tech.includes("Node.js") ||
        project.tech.includes("PHP")
      );

    if (filter === "database")
      return (
        project.tech.includes("PostgreSQL") || project.tech.includes("MySQL")
      );

    return true;
  });

  return (
    <section id="work" className="work">
      {/* =======================
          SECTION HEADER
      ======================== */}
      <div className="section-header">
        <span className="section-tag">
          <span>💼</span>
          <span>Portfolio</span>
        </span>

        <Heading level={2} className="work-title">
          Featured Work
        </Heading>

        <Typography muted className="section-description">
          A curated selection of projects I’ve built across full-stack
          development, backend engineering, data visualization, and secure web
          systems.
        </Typography>
      </div>

      {/* =======================
          FILTER TABS
      ======================== */}
      <div className="filter-tabs">
        <Radio
          label="All Projects"
          name="proj-filter"
          value="all"
          checked={filter === "all"}
          className={filter === "all" ? "active" : ""}
          onChange={setFilter}
        />

        <Radio
          label="Web Development"
          name="proj-filter"
          value="web"
          checked={filter === "web"}
          className={filter === "web" ? "active" : ""}
          onChange={setFilter}
        />

        <Radio
          label="Database"
          name="proj-filter"
          value="database"
          checked={filter === "database"}
          className={filter === "database" ? "active" : ""}
          onChange={setFilter}
        />

        <Radio
          label="Python"
          name="proj-filter"
          value="python"
          checked={filter === "python"}
          className={filter === "python" ? "active" : ""}
          onChange={setFilter}
        />
      </div>

      {/* =======================
          PROJECT GRID
      ======================== */}
      <div className="work-grid">
        {filteredProjects.map((project, index) => (
          <Card key={index} variant="glass" className="work-card" bare>
            <div className="card-body">
              <Image
                src={project.image}
                alt={project.title}
                width="100%"
                height="250px"
                rounded
                className="project-image"
              />

              <Typography size="lg" weight="bold" className="project-title">
                {project.title}
              </Typography>

              <Typography muted className="project-desc">
                {project.description.length > 90
                  ? project.description.slice(0, 90) + "..."
                  : project.description}
              </Typography>

              <div className="tech-list">
                {project.tech.map((tech, idx) => (
                  <Label key={idx} variant="soft">
                    {tech}
                  </Label>
                ))}
              </div>
            </div>

            <div className="card-footer">
              <Button
                label="View Project"
                variant="gradient"
                className="project-button"
                onClick={() => window.open(project.link, "_blank")}
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
