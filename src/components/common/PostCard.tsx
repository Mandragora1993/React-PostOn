import MCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { yellow } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { cardTheme, cardStyles } from "../../style/cardTheme"
import { CssBaseline } from "@mui/material";



interface CardProps {
  name: string;
  title: string;
  image?: string;
  description: string;
  children?: React.ReactNode;
}

export function Card({ name, title, image, description, children }: CardProps) {
  return (
    <ThemeProvider theme={cardTheme}>
      <CssBaseline />
      <MCard sx={{ ...cardStyles, marginBottom: 8 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: yellow[600] }} aria-label="recipe">
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
        <CardContent color="primary">
          <Typography>{description}</Typography>
          <Typography
            variant="body1"
            color={cardTheme.palette.primary.contrastText}
          ></Typography>
        </CardContent>
        <CardActions>
          {children}
        </CardActions>
      </MCard>
    </ThemeProvider>
  );
}
