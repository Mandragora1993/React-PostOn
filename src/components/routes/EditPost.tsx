import { Button, CircularProgress, TextField } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useGetPostById } from '../../api/post/useGetPostById';
import './../../style/form.scss';
import './../../style/buttons.scss';
import './../../style/circular.scss';
import ReplyIcon from '@mui/icons-material/Reply';
import SaveIcon from '@mui/icons-material/Save';
import { EditCard } from '../common/EditCard';


export default function EditPost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const post = useGetPostById(id || "");

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!post) {
    return <CircularProgress className='circular' />;
  }

  return (
    <EditCard>
      <form
        style={{ width: "100%" }}
        onSubmit={async (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          if (
            !formData.get("postId") ||
            !formData.get("title") ||
            !formData.get("body")
          ) {
            toast.error("Niepoprawne dane");
            return;
          }
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/post/${post.id}`,
            {
              method: "PUT",
              body: formData,
            }
          );
          await response.json();
          toast.success("Post został zedytowany ;]");

          navigate("/");
        }}
      >
        <div className='form'>
          <TextField
            id="postId"
            name="postId"
            label="PostId"
            fullWidth
            margin="normal"
            value={post.id}
          />
          <TextField
            id="title"
            name="title"
            label="Title"
            fullWidth
            margin="normal"
            value={post.title}
          />
          <TextField
            id="body"
            name="body"
            label="Body"
            multiline
            fullWidth
            margin="normal"
            value={post.body}
          />
          <Button
            size="large"
            className="previousButton"
            type="button"
            onClick={handleGoBack}
            variant="contained"
          >
            <ReplyIcon className="icon" /> Powrót
          </Button>
          <Button
            className="formButton"
            size="large"
            type="submit"
            variant="contained"
          >
            <SaveIcon className="icon" />Zapisz zmiany
          </Button>
        </div>
      </form>
    </EditCard>
  );
}
