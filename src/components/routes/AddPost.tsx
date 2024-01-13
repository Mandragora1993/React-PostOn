import { Button, Card, CardHeader, CssBaseline, TextField, ThemeProvider } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { cardTheme, cardStyles } from "../../style/cardTheme";
import './../../style/buttons.scss';
import './../../style/form.scss';
import ReplyIcon from '@mui/icons-material/Reply';
import SaveIcon from '@mui/icons-material/Save';


export default function AddPost() {
  const navigate = useNavigate();

  return (
    <ThemeProvider theme={cardTheme}>
      <CssBaseline />
      <Card sx={{ ...cardStyles }}>
        <CardHeader className='formHeader'
          title="Dodanie posta"
        />
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            if (
              !formData.get("userId") ||
              !formData.get("title") ||
              !formData.get("body")
            ) {
              toast.warning("Nie uzupełniono wszystkich pól!");
              return;
            }
            await fetch("https://jsonplaceholder.typicode.com/posts", {
              method: "POST",
              body: formData,
            });

            toast.success("Dodano nowy post :)");
            navigate("/");
          }}
        >
          <div className="form">
            <TextField
              id="userId"
              name="userId"
              label="UserId"
              fullWidth
              margin="normal"
            />
            <TextField
              id="title"
              name="title"
              label="Title"
              fullWidth
              margin="normal"
            />
            <TextField
              id="body"
              name="body"
              label="Body"
              multiline
              fullWidth
              margin="normal"
            />
            <Button
              size="large"
              className="previousButton"
              type="submit"
              component={Link}
              to="/"
              variant="contained"
            >
              <ReplyIcon className="icon" />Powrót
            </Button>
            <Button
              size="large"
              className="formButton"
              type="submit"
              variant="contained"
            >
              <SaveIcon className="icon" />Zapisz
            </Button>
          </div>
        </form>
      </Card>
    </ThemeProvider>
  );
}
