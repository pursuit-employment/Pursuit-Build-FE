import React from 'react';
import styled from 'styled-components';
import { formatDistanceToNow } from 'date-fns';

import API_BASE_URL from '../../config/api';

const CommentContainer = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const UserInfo = styled.span`
  font-weight: bold;
  color: #333;
`;

const Timestamp = styled.span`
  color: #777;
  font-size: 0.9em;
`;

const CommentContent = styled.p`
  margin: 0;
  color: #444;
`;

interface CommentProps {
  comment: {
    user_id: number;
    created_at: string;
    content: string;
  };
}

interface UserData {
  name: string;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [userData, setUserData] = React.useState<UserData | null>(null);

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/users/${comment.user_id}`);
        const data: UserData = await response.json();
        console.log(data);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [comment.user_id]);

  return (
    <CommentContainer>
      <CommentHeader>
        <UserInfo>{userData ? userData.name : `User ${comment.user_id}`}</UserInfo>
        <Timestamp>
          {formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}
        </Timestamp>
      </CommentHeader>
      <CommentContent>{comment.content}</CommentContent>
    </CommentContainer>
  );
};

export default Comment;
