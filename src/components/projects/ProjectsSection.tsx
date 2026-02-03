import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import { translations } from "../../constants/translations";
import "./projects.css"

type Props = {
  lang: "ES" | "EN";
  onOpenModal: (type: string) => void;
};

export default function ProjectsSection({ lang, onOpenModal }: Props) {
    const t = translations[lang].projects;
    const total = t.length;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 980);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);        
    }, []);

    // Si es móvil, mostramos todo el array. Si es desktop, usamos el slice
    // de la calesita.
    const projectsToShow = isMobile
        ? t
        : t.slice(currentIndex, currentIndex + 2);

    const nextProject = () => {
        if (currentIndex < total - 2) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };    

    return (
        <div className="projects-container">
            {!isMobile && (
                <button 
                    className={`nav-arrow left ${currentIndex === 0 ? 'disabled' : ''}`} 
                    onClick={prevProject}
                    aria-label="Previous"
                >
                    &lt;
                </button>                
            )}

            <div className="projects-grid">
                {projectsToShow.map((p) => (
                    <ProjectCard key={p.id} project={p} onOpenModal={onOpenModal}/>
                ))}
            </div>

            {!isMobile && (
                <button 
                    className={`nav-arrow right ${currentIndex >= total - 2 ? 'disabled' : ''}`}
                    onClick={nextProject}
                    aria-label="Next"
                >
                    &gt;
                </button>
            )}
        </div>            
    );
}