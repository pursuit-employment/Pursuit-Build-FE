import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import projectData from '../tempData/projectData.json';

// Features
import Comments from '../features/comments/Comments';

const ProjectDetailContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const ProjectTitle = styled.h1`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const ProjectInfo = styled.p`
  margin: 10px 0;
`;

const ProjectDescription = styled.p`
  margin-top: 20px;
  margin-bottom: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <ProjectDetailContainer>
      <ProjectTitle>{project.title}</ProjectTitle>
      <ProjectInfo><strong>Requester:</strong> {project.requester}</ProjectInfo>
      <ProjectInfo><strong>Product Manager:</strong> {project.productManager}</ProjectInfo>
      <ProjectInfo><strong>Status:</strong> {project.status}</ProjectInfo>
      <ProjectInfo><strong>Supporters:</strong> {project.supporters}</ProjectInfo>
      <ProjectInfo><strong>Contributors:</strong> {project.contributors}</ProjectInfo>
      <ProjectDescription>{project.description}</ProjectDescription>
      <ButtonContainer>
        <Button onClick={() => console.log('Share clicked')}>Share</Button>
        <Button onClick={() => console.log('I would use this clicked')}>I would use this</Button>
      </ButtonContainer>
      <Comments projectId={project.id} />
    </ProjectDetailContainer>
  );
};

export default ProjectDetail;
