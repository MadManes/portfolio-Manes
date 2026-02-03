import { translations } from "../../constants/translations";
import ProjectsSection from "../projects/ProjectsSection";

type Props = {
  section: string;
  lang: "ES" | "EN";
  onOpenModal: (type: string) => void;
  children?: React.ReactNode;
}

export default function Summary({ section, lang, onOpenModal, children }: Props) {
  const t = translations[lang].summary;

  return (
    <section className="summary">
      <div className="summary-content">
        {section === "home" && <p>{t.welcome}</p>}        
        {section === "projects" && <ProjectsSection lang={lang} onOpenModal={onOpenModal}/>}
        {section === "skills" && <p>{t.skillsTitle}</p>}
        {section === "education" && <p>{t.educationTitle}</p>}        
      </div>

      <div className="summary-footer">
        {children}
      </div>
    </section>
  );
}
