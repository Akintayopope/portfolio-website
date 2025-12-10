import Work from '../layout/Work/Work';
import { Heading } from '../components/Heading/Heading';

export default function WorkPage() {
  return (
    <div className="page-container">
      <Heading level={1} className="page-title">
        My Projects
      </Heading>
      <Work />
    </div>
  );
}
