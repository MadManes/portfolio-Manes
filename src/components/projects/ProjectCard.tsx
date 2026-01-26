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
            <div className="card-header">
                <div className="project-image">
                    <img src={project.image} alt={project.title} />
                </div>

                <div className="project-meta">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-actions">
                        <a href={project.demo} target="_blank">Ver proyecto</a>
                        <a href={project.details}>Detalles</a>
                    </div>
                </div>
            </div>

            <p className="project-description">
                {project.description}
            </p>
        </article>        
    );
}
