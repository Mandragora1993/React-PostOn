import React from "react";
import {
  Avatar,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAlbumsByUserId } from "../../api/album/useGetAlbumsByUser";
import './../../style/circular.scss';
import { baseTheme } from "../../style/baseTheme";
import MCard from "@mui/material/Card";
import ReplyIcon from '@mui/icons-material/Reply';
import PermMediaIcon from "@mui/icons-material/PermMedia";
import './../../style/list.scss';
import './../../style/listCard.scss';


export default function AlbumsList() {
  const { id } = useParams();
  const albums = useGetAlbumsByUserId(id || "");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!albums) {
    return <CircularProgress className='circular' />;
  }

  return (
    <MCard sx={{ marginBottom: 8 }}>
      <CardHeader
        className="listHeader"
        title="Albumy ze zdjęciami"
      />
      <CardContent className="listBody">
        <List className="list">
          {albums.map((album) => (
            <React.Fragment key={album.id}>
              <ListItem
                className="listItem"
                component={Link}
                to={`/photos/${album.id}`}
                sx={{ color: baseTheme.palette.primary.main }}
              >
                <ListItemAvatar>
                  <Avatar className="avatar">
                    <PermMediaIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText className="text" primary={album.title} />
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
}
