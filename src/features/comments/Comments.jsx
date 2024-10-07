import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import API_BASE_URL from '../../config/api';

import NewComment from './NewComment';
import Comment from './Comment';


const CommentsContainer = styled.div`
  margin-top: 20px;
`;

const CommentsList = styled.div`
  margin-bottom: 20px;
`;

const Pagination = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PageButton = styled.button`
  padding: 5px 10px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Comments = ({ projectId }) => {
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount  ] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchComments = async (page) => {
    try {
      setLoading(true);
      console.log(page)
      const response = await axios.get(`${API_BASE_URL}/projects/${projectId}/comments?page=${page}`);
      setComments(response.data.comments);
      setTotalCount(response.data.totalCount);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch comments');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments(currentPage);
  }, [currentPage, projectId]);

  const totalPages = Math.ceil(totalCount / 10);

  return (
    <CommentsContainer>
      <NewComment projectId={projectId} onCommentAdded={fetchComments} />
      <h3>Comments ({totalCount})</h3>
      {loading ? (
        <p>Loading comments...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <CommentsList>
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </CommentsList>
          <Pagination>
            <PageButton 
              onClick={() => setCurrentPage(prev => prev - 1)} 
              disabled={currentPage === 1}
            >
              Previous
            </PageButton>
            <span>Page {currentPage} of {totalPages}</span>
            <PageButton 
              onClick={() => setCurrentPage(prev => prev + 1)} 
              disabled={currentPage === totalPages}
            >
              Next
            </PageButton>
          </Pagination>
        </>
      )}
    </CommentsContainer>
  );
};

export default Comments;
