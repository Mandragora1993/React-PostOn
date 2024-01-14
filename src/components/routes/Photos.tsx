import { useNavigate, useParams } from 'react-router-dom';
import {
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  ImageList,
  ImageListItem,
} from '@mui/material';
import MCard from "@mui/material/Card";
import ReplyIcon from '@mui/icons-material/Reply';
import { useGetPhotosByAlbumId } from "../../api/photo/useGetPhotosByAlbum";
import './../../style/circular.scss';
import './../../style/photosCard.scss';


export default function StandardImageList() {
  const { id } = useParams();
  const photos = useGetPhotosByAlbumId(id || "");
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  if (!photos) {
    return <CircularProgress className='circular' />;
  }

  return (
    <MCard>
      <CardHeader
        className="photosHeader"
        title="Zdjęcia wybranego albumu"
      />
      <CardContent className="photosBody">
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
      <CardActions className="photosAction">
        <Button
          size="large"
          className="previousButton"
          type="button"
          onClick={handleGoBack}
          variant="contained"
        >
          <ReplyIcon className="icon" /> Powrót
        </Button>
      </CardActions>
    </MCard>
  );
}
