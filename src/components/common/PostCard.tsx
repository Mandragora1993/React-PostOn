import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { baseTheme } from "../../style/baseTheme";
import './../../style/postCard.scss';


interface CardProps {
  name: string;
  title: string;
  image?: string;
  description: string;
  children?: React.ReactNode;
}

export function PostCard({ name, title, image, description, children }: CardProps) {
  return (
    <MCard sx={{ marginBottom: 8 }}>
      <CardHeader
        className="postHeader"
        avatar={
          <Avatar sx={{ bgcolor: baseTheme.palette.secondary.main }} >
            {name}
          </Avatar>
        }
        title={
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        }
      />
      {image && (
        <CardMedia sx={{ height: 300 }} image={image} title="image" />
      )}
      <CardContent className="postBody">
        <Typography>{description}</Typography>
        <Typography
          variant="body2"
          color={baseTheme.palette.primary.contrastText}
        ></Typography>
      </CardContent>
      <CardActions className="postAction">
        {children}
      </CardActions>
    </MCard>
  );
}
