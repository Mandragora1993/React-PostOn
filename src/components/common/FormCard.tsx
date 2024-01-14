import React from "react";
import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import './../../style/formCard.scss';


interface Props {
  children?: React.ReactNode;
  marginBottom?: number;
}

export function FormCard({ children, marginBottom }: Props) {
  return (
    <MCard sx={{ marginBottom: marginBottom || 8 }}>
      <CardHeader className="formHeader"
        title="Dodawanie Posta"
      />
      <CardActions className="formAction">
        {children}
      </CardActions>
    </MCard>
  );
}
