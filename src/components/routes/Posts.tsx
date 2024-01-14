// Posts.tsx
import { useGetPosts } from '../../api/post/useGetPosts';
import { PostCard } from '../common/PostCard';
import { Link } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import { DeleteModal } from '../common/DeleteModal';
import './../../style/buttons.scss';
import './../../style/circular.scss';
import EditIcon from '@mui/icons-material/Edit';


export default function Posts() {
  const posts = useGetPosts();

  if (!posts) {
    return <CircularProgress className='circular' />;
  }

  const postsArray = Array.isArray(posts) ? posts : [posts];

  return (
    <div className="posts">
      {postsArray.map((post) => (
        <PostCard
          name=':)'
          description={post.body}
          title={post.title}
          image={post.url}
          key={post.id}
        >
          <Button
            className='cardButton'
            size="large"
            component={Link}
            to={`/edit-post/${post.id}`}
            variant="contained"
          >
            <EditIcon className="icon" />Edycja
          </Button>
          <DeleteModal postId={post.id} />
        </PostCard>
      ))}
    </div>
  );
}
