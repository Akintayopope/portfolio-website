import { Link } from 'react-router-dom';

interface NavLinkProps {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: number }>;
  onClick?: () => void;
}

export function NavLink({ href, label, Icon, onClick }: NavLinkProps) {
  return (
    <Link to={href} onClick={onClick} className="nav-link-item">
      <div className="nav-link-inner">
        <Icon size={20} />
        <span className="nav-link-text">{label}</span>
      </div>
    </Link>
  );
}
