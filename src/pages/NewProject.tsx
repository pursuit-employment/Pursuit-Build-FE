import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NewProjectContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.h1`
  color: var(--primary-color);
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CharCounter = styled.span`
  font-size: 0.8em;
  color: #666;
  align-self: flex-end;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

const ThankYouMessage = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const NewProject: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [helpWith, setHelpWith] = useState('');
  const [currentProcess, setCurrentProcess] = useState('');
  const [pursuitUsers, setPursuitUsers] = useState('');
  const [outsideUsers, setOutsideUsers] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <NewProjectContainer>
        <ThankYouMessage>
          <h2>Thank you for your idea!</h2>
          <p>You can keep an eye on your idea by checking the <Link to="/projects">Current Projects</Link> list.</p>
          <p>Have another idea? <Link to="/projects/new">Submit it here</Link>.</p>
        </ThankYouMessage>
      </NewProjectContainer>
    );
  }

  return (
    <NewProjectContainer>
      <Header>Create New Project</Header>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="idea">Explain your idea</Label>
          <TextArea
            id="idea"
            value={idea}
            onChange={(e) => setIdea(e.target.value.slice(0, 600))}
            maxLength={600}
            rows={5}
            required
          />
          <CharCounter>{idea.length}/600</CharCounter>
        </FormField>
        <FormField>
          <Label htmlFor="helpWith">This would help me with:</Label>
          <TextArea
            id="helpWith"
            value={helpWith}
            onChange={(e) => setHelpWith(e.target.value.slice(0, 300))}
            maxLength={300}
            rows={3}
            required
          />
          <CharCounter>{helpWith.length}/300</CharCounter>
        </FormField>
        <FormField>
          <Label htmlFor="currentProcess">My current process is:</Label>
          <TextArea
            id="currentProcess"
            value={currentProcess}
            onChange={(e) => setCurrentProcess(e.target.value.slice(0, 300))}
            maxLength={300}
            rows={3}
            required
          />
          <CharCounter>{currentProcess.length}/300</CharCounter>
        </FormField>
        <FormField>
          <Label htmlFor="pursuitUsers">I think the following people at Pursuit would also use this:</Label>
          <Input
            id="pursuitUsers"
            value={pursuitUsers}
            onChange={(e) => setPursuitUsers(e.target.value)}
            required
          />
        </FormField>
        <FormField>
          <CheckboxLabel>
            <input
              type="checkbox"
              checked={outsideUsers}
              onChange={(e) => setOutsideUsers(e.target.checked)}
            />
            I know of others outside Pursuit (past colleagues, friends, etc.) who I think would also use this
          </CheckboxLabel>
        </FormField>
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </NewProjectContainer>
  );
};

export default NewProject;
