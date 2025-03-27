import React from "react";

const Skills = () => {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills-grid">
                {["JavaScript", "React", "Node.js", "MongoDB", "SQL", "CSS"].map((skill) => (
                    <span key={skill}>{skill}</span>
                ))}
            </div>
        </section>
    );
};

export default Skills;
