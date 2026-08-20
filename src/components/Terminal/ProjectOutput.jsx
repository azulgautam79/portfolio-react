export const ProjectOutput = ({ projects }) => {
    return (
        <div className="space-y-4 my-4">
            {projects.map((project) => (
                <div
                    key={project.name}
                    className="
            rounded-xl
            border border-primary/10
            bg-white/[0.02]
            p-4
            hover:border-primary/30
            hover:bg-primary/[0.03]
            transition-all
          "
                >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <h3 className="font-semibold text-primary">
                            {project.name}
                        </h3>

                        <div className="flex gap-2">
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                >
                                    GitHub ↗
                                </a>
                            )}
                        </div>
                    </div>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-3">
                        {project.stack.map((technology) => (
                            <span
                                key={technology}
                                className="
                  px-2
                  py-1
                  rounded-md
                  bg-primary/5
                  border border-primary/10
                  text-[11px]
                  text-primary/80
                "
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};