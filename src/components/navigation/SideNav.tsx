import { translations } from "../../constants/translations";

type Props = {
  active: string;
  onChange: (id: string) => void;
  lang: "ES" | "EN"; 
};

export default function SideNav({ active, onChange, lang }: Props) {
  const t = translations[lang].nav;

  const items = [
    { id: "home", label: t.home },
    { id: "projects", label: t.projects },
    { id: "skills", label: t.skills },
    { id: "education", label: t.education },
  ];
  return (
    <nav className="side-nav">
      <ul className="side-nav-list">
        {items.map((item) => (
          <li
            key={item.id}
            className={`action ${active === item.id ? "is-active" : ""}`}
            onClick={() => onChange(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
}
