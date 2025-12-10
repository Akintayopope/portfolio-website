import Resources from "../layout/Resources/Resources";
import { Heading } from "../components/Heading/Heading";

export default function ResourcesPage() {
  return (
    <div className="page-container">
      <Heading level={1} className="page-title">
        Developer Resources
      </Heading>
      <Resources />
    </div>
  );
}
