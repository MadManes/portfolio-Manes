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
];

export default function ProjectsSection() {
    return (
        <div className="projects-grid">
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}
        </div>
    );
}