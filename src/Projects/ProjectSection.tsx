import '../styles/style.css'
import React, { FC } from 'react';

interface ProjectSectionProps {
    title: string;
    description: JSX.Element;
    link: string;
    image: string;
    imageAlt: string;
}

const ProjectSection: FC<ProjectSectionProps> = ({ title, description, link, image, imageAlt }) => {
    return (
        <div className="project">
            <h3 className="project--title">{title}</h3>
            <div className="project-content">
                <div className="project--text">
                    <>
                        {description}
                        <a href={link} target="_blank">View Code</a>
                    </>
                </div>
                <img className="project--image" src={image}
                    alt={imageAlt} />
            </div>
        </div>
    );
};

export default ProjectSection;



