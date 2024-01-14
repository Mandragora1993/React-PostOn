import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { toast } from 'react-toastify';
import './../../style/modals.css';
import './../../style/buttons.scss';
import { green } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import { baseTheme } from '../../style/baseTheme';

interface DeleteModalProps {
  postId: number;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ postId }) => {
  const [open, setOpen] = React.useState(false);
  const [postIdToDelete, setPostIdToDelete] = React.useState<number | null>(null);

  const handleOpen = () => {
    setPostIdToDelete(postId);
    setOpen(true);
  };

  const handleClose = () => {
    setPostIdToDelete(null);
    setOpen(false);
  };

  const handleDelete = () => {
    handleClose();
    toast.success(`Usunięto post o id: ${postId}`);
  };

  interface DeleteProps {
    id: number;
    onDelete: () => void;
  }

  const Delete: React.FC<DeleteProps> = ({ id, onDelete }) => {
    const handleDelete = async () => {
      await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE",
      });
      onDelete();
    };

    return (
      <div>
        <Button
          className='deleteButton'
          size='large'
          onClick={handleDelete}
        >
          <DeleteIcon className="icon" />Usuń
        </Button>
      </div>
    );
  };

  return (
    <div>
      <Button
        className='deleteButton'
        size='large'
        onClick={handleOpen}
        variant="contained"
      >
        <DeleteIcon className="icon" />Usuń
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className='modals'
          sx={{ backgroundColor: baseTheme.palette.primary.light }}
        >
          <Typography variant="h6" gutterBottom sx={{ fontWeight: "bold", color: baseTheme.palette.primary.main }}>
            Czy na pewno chcesz usunąć komentarz?
          </Typography>
          <Button
            className='deleteButton'
            size='large'
            onClick={handleDelete}
            variant="contained"
          >
            <DeleteIcon className="icon" />Usuń
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export { DeleteModal };
