import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css"

const projects = {
    ES: [
            {
                id: 1,
                title: "Proyecto 1",
                description: "Descripción breve del proyecto 1",
                image: "/project1.png",
                demo: "Descarga PC",
                details: "Más detalles...",
            },
            {
                id: 2,
                title: "Proyecto 2",
                description: "Web App que transmite online, relevos del personal de una empresa. Compartiendo en tiempo real los relevos que los empleados ven, originalmente, por pantallas en la sala de descanso.",
                image: "/project1_preview.png",
                demo: "Visitar página",
                details: "Más detalles...",
            },
            {
                id: 3,
                title: "Proyecto 3",
                description: "Descripción breve del proyecto 3",
                image: "/project3.png",
                demo: "Visitar página",
                details: "Más detalles...",
            },
            {
                id: 4,
                title: "Proyecto 4",
                description: "Descripción breve del proyecto 4",
                image: "/project4.png",
                demo: "Descarga PC",
                details: "Más detalles...",
            },
    ],
    EN: [
            {
                id: 1,
                title: "Project 1",
                description: "A short description of project 1",
                image: "/project1.png",
                demo: "Download PC",
                details: "More details...",
            },
            {
                id: 2,
                title: "Project 2",
                description: "A short description of project 2",
                image: "/project1_preview.png",
                demo: "Go to site",
                details: "More details...",
            },
            {
                id: 3,
                title: "Project 3",
                description: "A short description of project 3",
                image: "/project3.png",
                demo: "Go to site",
                details: "More details...",
            },
            {
                id: 4,
                title: "Project 4",
                description: "A short description of project 4",
                image: "/project4.png",
                demo: "Download PC",
                details: "More details...",
            },
    ],
};

export default function ProjectsSection({ lang }: {lang: "ES" | "EN" }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        if (currentIndex < projects[lang].length - 2) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const visibleProjects = projects[lang].slice(currentIndex, currentIndex + 2);

    return (
        <div className="projects-container">
            <button
                className={`nav-arrow left ${currentIndex === 0 ? 'disabled' : ''}`}
                onClick={prevProject}
                aria-label="Anterior"
            >
                &lt;
            </button>
            <div className="projects-grid">
                {visibleProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            <button
                className={`nav-arrow right ${currentIndex >= projects[lang].length - 2 ? 'disabled' : ''}`}
                onClick={nextProject}
                aria-label="Siguiente"
            >
                &gt;
            </button>
        </div>
    );
}