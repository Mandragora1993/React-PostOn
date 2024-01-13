import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CircularProgress } from '@mui/material';
import { Card } from './PostCard';
import { useGetCommentsByPostId } from '../../api/comment/useGetCommentsByPost';
import CommentIcon from '@mui/icons-material/Comment';
import './../../style/modals.css'
import './../../style/icon.css'
import './../../style/buttons.scss'


const Comments = () => {
  const comments = useGetCommentsByPostId();

  if (!comments) {
    return <CircularProgress className='circular' />;
  }

  return (
    <div>
      {comments.map((comment) => (
        <Card 
          name=""
          title=""
          description={comment.body}
          key={comment.id}
        />
      ))}
    </div>
  );
};

const CommandModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        className='cardButton'
        size='large'
        onClick={handleOpen}
        variant="contained"
      >
        <CommentIcon className='icon' /> Komentarze
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modals'>
          <Comments />
        </Box>
      </Modal>
    </div>
  );
}

export default CommandModal;
