import ProjectsSection from "../projects/ProjectsSection";

type Props = {
  section: string;
  children?: React.ReactNode;
}

export default function Summary({ section, children }: Props) {
  return (
    <section className="summary">
      <div className="summary-content">
        {section === "summary" && (
          <div className="summary-center">
            <p>Contenido principal</p>
          </div>
        )}
        
        {section === "projects" && <ProjectsSection />}
        {section === "skills" && <p>Habilidades</p>}
        {section === "education" && <p>Formación</p>}
      </div>

      <div className="summary-footer">
        {children}
      </div>
    </section>
  );
}
