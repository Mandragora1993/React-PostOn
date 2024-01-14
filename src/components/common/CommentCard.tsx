import MCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import { baseTheme } from "../../style/baseTheme";
import './../../style/postCard.scss';


interface CommentProps {
  name: string;
  body: string;
}

export function CommentCard({ name, body }: CommentProps) {
  return (
    <MCard sx={{ marginBottom: 8 }}>
      <CardHeader
        className="postHeader"
        title={
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
        }
      >
      </CardHeader>
      <CardContent className="postBody">
        <Typography>{body}</Typography>
        <Typography
          variant="body2"
          color={baseTheme.palette.primary.contrastText}
        ></Typography>
      </CardContent>
    </MCard>
  );
}
