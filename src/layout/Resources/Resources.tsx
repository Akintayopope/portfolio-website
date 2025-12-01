import "./Resources.css";
import { Typography } from "../../components/Typography/Typography";
import { Button } from "../../components/Button/Button";
import { Image } from "../../components/Image/Image";

export default function Resources() {
  const resources = [
    {
      title: "React Documentation",
      summary:
        "The official React documentation — essential for learning components, hooks, and advanced UI patterns.",
      image: "/res-react.png",
      link: "https://react.dev",
    },
    {
      title: "MDN Web Docs",
      summary:
        "Mozilla’s authoritative guide to HTML, CSS, JavaScript, APIs, and browser fundamentals.",
      image: "/res-mdn.png",
      link: "https://developer.mozilla.org",
    },
    {
      title: "Node.js Documentation",
      summary:
        "Complete reference for Node.js, event loop, modules, streams, HTTP servers, and backend engineering.",
      image: "/res-node.png",
      link: "https://nodejs.org/en/docs",
    },
    {
      title: "Ruby on Rails Guides",
      summary:
        "Learn Rails best practices, MVC structure, ActiveRecord, controllers, and full backend development.",
      image: "/res-rails.png",
      link: "https://guides.rubyonrails.org",
    },
  ];

  return (
    <section className="resources" id="resources">
      <Typography size="xl" weight="bold" className="resources-title">
        Resources
      </Typography>

      <Typography muted className="resources-desc">
        Helpful documentation, tools, and guides that shaped my development
        experience.
      </Typography>

      <div className="resource-list">
        {resources.map((item, index) => (
          <div key={index} className="resource-row">
            {/* Left Icon */}
            <Image
              src={item.image}
              alt={item.title}
              width="70px"
              height="70px"
              rounded={true}
            />

            {/* Right Content */}
            <div className="resource-content">
              <Typography size="lg" weight="medium" className="resource-title">
                {item.title}
              </Typography>

              <Typography muted className="resource-summary">
                {item.summary}
              </Typography>

              <Button
                label="Visit"
                className="resource-link-btn"
                onClick={() => window.open(item.link, "_blank")}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
