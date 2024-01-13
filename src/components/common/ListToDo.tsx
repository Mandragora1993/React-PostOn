import React from "react";
import List from '@mui/material/List';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { ToDo } from "../../api/todo/useGetToDoByUser";
import { CssBaseline, Divider, ThemeProvider } from "@mui/material";
import { listTheme, listStyles } from "../../style/listTheme ";
import './../../style/table.scss';

interface Props {
  data: ToDo[];
}

export default function ListComponent({ data }: Props) {
  return (
    <ThemeProvider theme={listTheme}>
      <CssBaseline />
      <List>
        {data.map((row) => (
          <React.Fragment key={row.id}>
            <ListItem sx={{ ...listStyles }}>
              <ListItemText
                className="text"
                primary={row.title}
                secondary={row.completed ? "Yes" : "No"}
                sx={{ color: "black" }}
              />
            </ListItem>
            <Divider className="divider" variant="inset" component="li" />
          </React.Fragment>
        ))}
      </List>
    </ThemeProvider>
  );
}
