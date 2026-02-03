type Project = {
    id_str: string;
    title: string;
    description: string;
    image: string;
    demo: string;
    details: string;
};

type Props = {
    project: Project;
    onOpenModal: (type: string) => void;
}

export default function ProjectCard({ project, onOpenModal }: Props) {
    return (
        <article className="project-card">
            <img src={project.image} alt={project.title} className="project-floating-image" />
            <div className="project-text-content">
                <div className="project-header-row">
                    <h3>{project.title}</h3>
                    <div className="project-links">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">{project.demo}</a>
                        <a 
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                onOpenModal(project.id_str);
                            }}
                        >
                            {project.details}
                        </a>
                    </div>
                </div>
                <p className="project-description">
                    {project.description}
                </p>
            </div>            
        </article>        
    );
}
