import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import API_BASE_URL from '../../config/api';
import { useAuth } from '../../context/AuthContext'; // Assuming this is where the useAuth hook is defined

const NewCommentForm = styled.form`
  margin-top: 20px;
`;

const CommentTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
`;

const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 8px 16px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary-color-dark);
  }
`;

const NewComment = ({ projectId, onCommentAdded }) => {
  const [content, setContent] = useState('');
  const { isAuthenticated } = useAuth(); // Add this line

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      console.error('User not authenticated');
      return;
    }
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(`${API_BASE_URL}/projects/${projectId}/comments`, 
        { content, projectId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      onCommentAdded(1);
      setContent('');
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  return (
    <NewCommentForm onSubmit={handleSubmit}>
      <CommentTextArea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Have thoughts? We want to hear them!"
        required
      />
      <SubmitButton type="submit">Submit Comment</SubmitButton>
    </NewCommentForm>
  );
};

export default NewComment;
