export default function Summary({ section }: { section: string }) {
  return (
    <section className="summary">
      {section === "summary" && <p>Resumen</p>}
      {section === "projects" && <p>Proyectos</p>}
      {section === "skills" && <p>Habilidades</p>}
      {section === "education" && <p>Formación</p>}
    </section>
  );
}
