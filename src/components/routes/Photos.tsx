import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useGetPhotosByAlbumId } from "../../api/photo/useGetPhotosByAlbum";
import { CardActions, CardContent, CardHeader, CircularProgress, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import './../../style/circular.scss';
import { cardTheme, cardStyles } from '../../style/cardTheme';
import MCard from "@mui/material/Card";


export default function StandardImageList() {
  const { id } = useParams();
  const photos = useGetPhotosByAlbumId(id || "");

  if (!photos) {
    return <CircularProgress className='circular' />;
  }

  return (
    <ThemeProvider theme={cardTheme}>
    <CssBaseline />
    <MCard sx={{ ...cardStyles }}>
    <CardHeader 
      className= "cardHeader" 
      title= "Zdjęcia wybranego albumu" />


      <CardContent className="cardBody">
      <ImageList cols={2}>
      {photos.map((item) => (
        <ImageListItem key={item.id}>
          <img
            srcSet={`${item.url}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
      </CardContent>
      <CardActions className="cardAction">
      </CardActions>
    </MCard>
  </ThemeProvider>
  );
}