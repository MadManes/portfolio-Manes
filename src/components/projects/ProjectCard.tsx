type Project = {
    title: string;
    description: string;
    image: string;
    demo: string;
    details: string;
};

export default function ProjectCard({ project }: {project: Project}) {
    return (
        <article className="project-card">
            <img src={project.image} alt={project.title} className="project-floating-image" />
            <div className="project-text-content">
                <div className="project-header-row">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                        <a href={project.demo} target="_blank">{project.demo}</a>
                        <a href={project.details}>{project.details}</a>
                    </div>
                </div>
                <p className="project-description">
                    {project.description}
                </p>
            </div>            
        </article>        
    );
}
