import React from "react";
import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from '@mui/material/styles';
import CardHeader from "@mui/material/CardHeader";
import { cardTheme, cardStyles } from "../../style/cardTheme"
import './../../style/card.scss';


interface Props {
  name?: string;
  email?: string;
  address?: string;
  phone?: string;
  image?: string;
  statuses?: boolean;
  children?: React.ReactNode;
  marginBottom?: number;
}

export function UserCard({ name, email, address, phone, image, children, marginBottom }: Props) {
  return (
    <ThemeProvider theme={cardTheme}>
      <MCard sx={{ ...cardStyles, marginBottom: marginBottom || 8 }}>
        <CardHeader className="cardHeader"
          title="Podgląd użytkownika"
        />
        {image && (
          <CardMedia sx={{ height: 300 }} image={image} title="image" />
        )}
        <CardContent className="cardBody">
          <Typography sx={{ marginBottom: 1 }}>{name}</Typography>
          <Typography sx={{ marginBottom: 1 }}>{email}</Typography>
          <Typography sx={{ marginBottom: 1 }}>{address}</Typography>
          <Typography sx={{ marginBottom: 1 }}>{phone}</Typography>
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
