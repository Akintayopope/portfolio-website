import "./DevSetup.css";
import { Typography } from "../../components/Typography/Typography";
import { Image } from "../../components/Image/Image";

export default function DevSetup() {
  const setups = [
    {
      title: "VSCode Setup",
      summary:
        "My custom VSCode setup includes theme, extensions, keyboard shortcuts, and UI preferences that optimize productivity.",
      icon: "/icon-vscode.png",
    },
    {
      title: "Terminal Setup",
      summary:
        "Fast terminal environment using Windows Terminal / PowerShell with custom prompt, aliases, and tools like Git, Node, and Python.",
      icon: "/icon-terminal.png",
    },
    {
      title: "Preferred Editor Font",
      summary:
        "I use JetBrains Mono / Fira Code with ligatures enabled for clean, readable, and expressive code typography.",
      icon: "/icon-font.png",
    },
  ];

  return (
    <section className="devsetup" id="devsetup">
      {/* Title */}
      <Typography size="xl" weight="bold" className="devsetup-title">
        Developer Setup
      </Typography>

      <Typography muted className="devsetup-desc">
        My preferred coding environment, editor tools, themes, and fonts that
        help me stay productive and write clean code every day.
      </Typography>

      <div className="devsetup-layout">
        {/* LEFT SIDE */}
        <div className="devsetup-left">
          <Typography size="lg" weight="medium" className="devsetup-heading">
            My Development Environment
          </Typography>

          <Typography muted className="devsetup-info">
            These are the tools and configurations I rely on for building
            full-stack web applications. Everything is optimized for speed,
            readability, and focus.
          </Typography>
        </div>

        {/* RIGHT SIDE — SETTINGS CARDS */}
        <div className="devsetup-right">
          {setups.map((item, index) => (
            <div className="dev-card" key={index}>
              <div className="dev-card-top">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width="50px"
                  height="50px"
                  rounded={true}
                />

                <Typography
                  size="lg"
                  weight="medium"
                  className="dev-card-title"
                >
                  {item.title}
                </Typography>
              </div>

              <Typography muted className="dev-card-summary">
                {item.summary}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
