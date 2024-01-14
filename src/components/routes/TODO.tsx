import { 
  Button, 
  CardActions, 
  CardContent, 
  CardHeader, 
  CircularProgress, 
  Divider, 
  List, 
  ListItem, 
  ListItemText 
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useGetToDoByUserId } from "../../api/todo/useGetToDoByUser";
import './../../style/circular.scss';
import React from "react";
import MCard from "@mui/material/Card";
import ReplyIcon from '@mui/icons-material/Reply';
import './../../style/list.scss';
import './../../style/listCard.scss';
import { baseTheme } from "../../style/baseTheme";


export default function ToDo() {
  const { id } = useParams();
  const toDo = useGetToDoByUserId(id || "");

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!toDo) {
    return <CircularProgress className='circular' />;
  }

  return (
    <MCard sx={{ marginBottom: 8 }}>
      <CardHeader
        className="listHeader"
        title="Lista zadań"
      />
      <CardContent className="listBody">
        <List>
          {toDo.map((row) => (
            <React.Fragment key={row.id}>
              <ListItem className="listItem">
                <ListItemText
                  className="text"
                  primary={row.title}
                  secondary={row.completed ? "Yes" : "No"}
                  sx={{ color: baseTheme.palette.primary.dark }}
                />
              </ListItem>
              <Divider className="divider" variant="inset" component="li" />
            </React.Fragment>
          ))}
        </List>
      </CardContent>
      <CardActions className="listAction">
        <Button
          size="large"
          className="previousButton"
          type="button"
          onClick={handleGoBack}
          variant="contained"
        >
          <ReplyIcon className="icon" /> Powrót
        </Button>
      </CardActions>
    </MCard>

  );
};
