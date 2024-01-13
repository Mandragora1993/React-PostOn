import React from "react";
import { Album } from "../../api/album/useGetAlbumsByUser";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { CssBaseline, Divider, ThemeProvider } from "@mui/material";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { listTheme, listStyles } from "../../style/listTheme ";
import './../../style/list.scss';



interface Props {
  data: Album[];
}

export default function Lists({ data }: Props) {
  return (
    <ThemeProvider theme={listTheme}>
      <CssBaseline />
      <List>
        {data.map((album) => (
          <React.Fragment key={album.id}>
            <ListItem
              component={Link}
              to={`/photos/${album.id}`}
              sx={{ ...listStyles }}
              className="list"
            >
              <ListItemAvatar>
                <Avatar className="avatar">
                  <PermMediaIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText className="text" primary={album.title} sx={{ color: "black" }} />
            </ListItem>
            <Divider className="divider" variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </ThemeProvider>
  );
}