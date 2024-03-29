import React from "react";
import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import './../../style/profileCard.scss';
import { baseTheme } from "../../style/baseTheme";


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
    <MCard sx={{ marginBottom: marginBottom || 8 }}>
      <CardHeader className="cardHeader"
        title="Profil użytkownika"
      />

      <CardContent className="cardBody">
        <Typography>{name}</Typography>
        <Typography>{email}</Typography>
        <Typography>{address}</Typography>
        <Typography>{phone}</Typography>
        <Typography
          variant="body2"
          color={baseTheme.palette.primary.contrastText}
        ></Typography>
      </CardContent>
      <CardActions className="cardAction">
        {children}
      </CardActions>
    </MCard>
  );
}
