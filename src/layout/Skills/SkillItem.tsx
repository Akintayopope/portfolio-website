import "./SkillItem.css";

interface SkillItemProps {
  label: string;
}

export default function SkillItem({ label }: SkillItemProps) {
  return (
    <div className="skill-item">
      <span className="skill-dot"></span>
      <span className="skill-name">{label}</span>
    </div>
  );
}
