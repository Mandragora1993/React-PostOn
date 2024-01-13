import React, { useState, useEffect } from 'react';
import { useGetPosts } from '../../api/post/useGetPosts';
import { Card } from '../common/PostCard';
import { Link } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import CommentModal from '../common/CommentsModal';
import './../../style/buttons.scss';
import { useGetUserById } from '../../api/user/useGetUserById';
import './../../style/circular.scss';

const Home: React.FC = () => {
  const posts = useGetPosts();

  useEffect(() => {
    // Wywołaj funkcję, która korzysta z posts, jeśli to konieczne
  }, [posts]);

  if (!posts) {
    return <CircularProgress className='circular' />;
  }

  return (
    <div className="posts">
      {Array.isArray(posts) && posts.map((post) => (
        <Card
          name={post.userId.toString()}
          description={post.body}
          title={post.title}
          image={post.url}
          key={post.id}
        >
          <UserButton userId={post.userId} />
          <CommentModal />
        </Card>
      ))}
    </div>
  );
};

interface UserButtonProps {
  userId: number;
}

const UserButton: React.FC<UserButtonProps> = ({ userId }) => {
  const [userInitial, setUserInitial] = useState<string>('');
  const user = useGetUserById(userId.toString());

  useEffect(() => {
    setUserInitial(user?.name.charAt(0) || '');
  }, [user]);

  return (
    <Button
      className='cardButton'
      size="large"
      component={Link}
      to={`/user/${userId}`}
      variant="contained"
    >
      <AssignmentIndIcon className='icon' /> Użytkownik
    </Button>
  );
};

export default Home;
