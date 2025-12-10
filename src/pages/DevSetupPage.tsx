import DevSetup from '../layout/DevSetup/DevSetup';
import { Heading } from '../components/Heading/Heading';

export default function DevSetupPage() {
  return (
    <div className="page-container">
      <Heading level={1} className="page-title">
        My Developer Setup
      </Heading>
      <DevSetup />
    </div>
  );
}
