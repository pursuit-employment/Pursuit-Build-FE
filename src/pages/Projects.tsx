import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import projectData from '../tempData/projectData.json';

const ProjectsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectTitle = styled.h1`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled(Link)`
  display: block;
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-3px);
  }
`;

const ProjectName = styled.h2`
  color: var(--primary-color);
  margin-bottom: 10px;
`;

const ProjectInfo = styled.p`
  margin: 5px 0;
`;

const ProjectDescription = styled.p`
  margin-top: 10px;
`;

const truncateDescription = (description: string, maxLength: number) => {
  if (description.length <= maxLength) return description;
  return `${description.substring(0, maxLength)}...`;
};

const Projects: React.FC = () => {
  return (
    <ProjectsContainer>
      <ProjectTitle>Projects</ProjectTitle>
      <ProjectList>
        {projectData.map((project) => (
          <ProjectItem key={project.id} to={`/projects/${project.id}`}>
            <ProjectName>{project.title}</ProjectName>
            <ProjectInfo>Requester: {project.requester}</ProjectInfo>
            <ProjectInfo>Status: {project.status}</ProjectInfo>
            <ProjectInfo>Supporters: {project.supporters}</ProjectInfo>
            <ProjectDescription>{truncateDescription(project.description, 300)}</ProjectDescription>
          </ProjectItem>
        ))}
      </ProjectList>
    </ProjectsContainer>
  );
};

export default Projects;
