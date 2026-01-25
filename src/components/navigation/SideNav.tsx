const items = [
  { id: "projects", label: "Proyectos" },
  { id: "skills", label: "Habilidades" },
  { id: "education", label: "Formación" },
];

export default function SideNav({
  active,
  onChange,
}: {
  active: string;
  onChange: (id: string) => void;
}) {
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
