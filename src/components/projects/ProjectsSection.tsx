import { useState } from "react";
import ProjectCard from "./ProjectCard";
import "./projects.css"

const projects = [
    {
        id: 1,
        title: "Proyecto 1",
        description: "Descripción breve del proyecto 1",
        image: "/project1.png",
        demo: "#",
        details: "#",
    },
    {
        id: 2,
        title: "Proyecto 2",
        description: "Descripción breve del proyecto 2",
        image: "/project2.png",
        demo: "#",
        details: "#",
    },
    {
        id: 3,
        title: "Proyecto 3",
        description: "Descripción breve del proyecto 3",
        image: "/project3.png",
        demo: "#",
        details: "#",
    },
    {
        id: 4,
        title: "Proyecto 4",
        description: "Descripción breve del proyecto 4",
        image: "/project4.png",
        demo: "#",
        details: "#",
    },
];

export default function ProjectsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        if (currentIndex < projects.length - 2) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const visibleProjects = projects.slice(currentIndex, currentIndex + 2);

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
                className={`nav-arrow right ${currentIndex >= projects.length - 2 ? 'disabled' : ''}`}
                onClick={nextProject}
                aria-label="Siguiente"
            >
                &gt;
            </button>
        </div>
    );
}