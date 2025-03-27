import React from "react";

const Projects = () => {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <div className="project-list">
                {[
                    { title: "Job Board", description: "A platform for job seekers and employers." },
                    { title: "Content Creator Platform", description: "A tool for creators to streamline their content workflow." }
                ].map((project, index) => (
                    <div className="project-item" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href="#">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
