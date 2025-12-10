import './Resources.css';
import { Card } from '../../components/Card/Card';
import { Heading } from '../../components/Heading/Heading';
import { Typography } from '../../components/Typography/Typography';
import { Button } from '../../components/Button/Button';
import { Table } from '../../components/Table/Table'; // ✅ ADD TABLE COMPONENT
import { Label } from '../../components/Label/Label'; // ✅ ADD LABEL COMPONENT

import {
  BookOpen,
  Code2,
  Github,
  Layers,
  Globe,
  ExternalLink,
} from 'lucide-react';

export default function Resources() {
  const featured = {
    title: 'MDN Web Docs',
    summary:
      'The most comprehensive and trusted documentation for HTML, CSS, JavaScript, and browser APIs. My number-one reference for accurate technical details.',
    icon: <BookOpen size={64} color="#60a5fa" />,
    link: 'https://developer.mozilla.org',
  };

  const resources = [
    {
      title: 'React Documentation',
      summary:
        'Official lessons and API guides for modern React patterns, hooks, components, and performance techniques.',
      icon: <Code2 size={50} color="#a78bfa" />,
      category: 'Framework',
      link: 'https://react.dev',
    },
    {
      title: 'GitHub',
      summary:
        'Industry-standard platform for version control, collaboration, CI/CD workflows, repository hosting, and open-source development.',
      icon: <Github size={50} color="#f472b6" />,
      category: 'Version Control',
      link: 'https://github.com',
    },
    {
      title: 'Stack Overflow',
      summary:
        'The biggest Q&A knowledge base for debugging, solving problems, and learning from real-world developer discussions.',
      icon: <Layers size={50} color="#38bdf8" />,
      category: 'Community',
      link: 'https://stackoverflow.com',
    },
    {
      title: 'freeCodeCamp',
      summary:
        'Interactive courses, certifications, and hands-on projects to learn full-stack web development—for free.',
      icon: <Globe size={50} color="#4ade80" />,
      category: 'Education',
      link: 'https://freecodecamp.org',
    },
    {
      title: 'CSS-Tricks',
      summary:
        'Front-end guides, layout techniques, animations, responsive design patterns, and practical CSS problem solving.',
      icon: <Layers size={50} color="#facc15" />,
      category: 'Design',
      link: 'https://css-tricks.com',
    },
    {
      title: 'TypeScript Handbook',
      summary:
        'Official TypeScript reference for types, interfaces, generics, narrowing, and scalable JavaScript architecture.',
      icon: <Code2 size={50} color="#22d3ee" />,
      category: 'Language',
      link: 'https://www.typescriptlang.org/docs/',
    },
    {
      title: 'Vercel Deployment',
      summary:
        'Modern deployment tooling for React, Next.js, and Node apps with serverless functions and CI/CD workflows.',
      icon: <Globe size={50} color="#e879f9" />,
      category: 'Deployment',
      link: 'https://vercel.com/docs',
    },
  ];

  return (
    <section className="resources-section" id="resources">
      {/* SECTION HEADER */}
      <div className="resources-header">
        <span className="resources-tag">Learning Hub</span>

        <Heading level={2} className="resources-title-gradient resources-title">
          Developer Resources
        </Heading>

        <Typography muted className="resources-subtitle">
          Curated tools, documentation, and platforms that shaped my development
          learning journey and continue to support my growth.
        </Typography>
      </div>

      {/* GRID */}
      <div className="resources-grid">
        {/* FEATURED CARD */}
        <Card variant="glass" className="featured-card">
          <div className="featured-icon">{featured.icon}</div>

          <Heading level={3} className="featured-title">
            {featured.title}
          </Heading>

          <Typography className="featured-summary">
            {featured.summary}
          </Typography>

          <a
            href={featured.link}
            target="_blank"
            rel="noopener noreferrer"
            className="featured-btn-wrapper"
          >
            <Button label="Explore Documentation" variant="gradient" />
          </a>
        </Card>

        {/* RESOURCE CARDS */}
        {resources.map((item, i) => (
          <Card key={i} variant="glass" className="resource-card">
            <div className="resource-icon">{item.icon}</div>

            <Heading level={3} className="resource-title">
              {item.title}
            </Heading>

            <Typography muted className="resource-summary">
              {item.summary}
            </Typography>

            <div className="resource-footer">
              {/* CATEGORY AS LABEL COMPONENT */}
              <Label text={item.category} />

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="resource-btn-link"
              >
                Visit <ExternalLink size={16} />
              </a>
            </div>
          </Card>
        ))}
      </div>

      {/* ============================
          TABLE VIEW (NEW SECTION)
      ============================= */}
      <div className="resources-table-wrapper">
        <Heading level={3} className="table-heading">
          Resource Index (Table View)
        </Heading>

        <Table>
          <thead>
            <tr>
              <th>Resource</th>
              <th>Category</th>
              <th>Visit</th>
            </tr>
          </thead>

          <tbody>
            {resources.map((item, i) => (
              <tr key={i}>
                <td>{item.title}</td>

                <td>
                  <Label text={item.category} />
                </td>

                <td>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    Open <ExternalLink size={14} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* STATS SECTION */}
      <div className="resources-stats">
        <Card variant="glass" className="stat-card">
          <div className="stat-icon">🎯</div>
          <Heading level={3}>Daily Learning</Heading>
          <Typography muted>
            I dedicate time each day to learning, exploring tools, and improving
            my craft.
          </Typography>
        </Card>

        <Card variant="glass" className="stat-card">
          <div className="stat-icon">🌟</div>
          <Heading level={3}>Quality First</Heading>
          <Typography muted>
            My resource list is carefully curated for accuracy, depth, and
            long-term value.
          </Typography>
        </Card>

        <Card variant="glass" className="stat-card">
          <div className="stat-icon">🚀</div>
          <Heading level={3}>Always Growing</Heading>
          <Typography muted>
            Learning never stops—new frameworks, patterns, and technologies keep
            me evolving.
          </Typography>
        </Card>
      </div>
    </section>
  );
}
