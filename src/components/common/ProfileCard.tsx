import React from "react";
import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from '@mui/material/styles';
import CardHeader from "@mui/material/CardHeader";
import { cardTheme, cardStyles } from "../../style/cardTheme"
import { CssBaseline } from "@mui/material";
import './../../style/card.scss';


interface Props {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  children?: React.ReactNode;
  marginBottom?: number;
}

export function ProfileCard({ name, email, address, phone, children, marginBottom }: Props) {
  return (
    <ThemeProvider theme={cardTheme}>
      <CssBaseline />
      <MCard sx={{ ...cardStyles, marginBottom: marginBottom || 8 }}>
        <CardHeader className="cardHeader"
          title="Profil użytkownika"
        />

        <CardContent className="cardBody">
          <Typography>{email}</Typography>
          <Typography>{address}</Typography>
          <Typography>{phone}</Typography>
          <Typography
            variant="body1"
            color={cardTheme.palette.primary.contrastText}
          ></Typography>
        </CardContent>
        <CardActions className="cardAction">
          {children}
        </CardActions>
      </MCard>
    </ThemeProvider>
  );
}
