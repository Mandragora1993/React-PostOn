import { CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import List from "../common/ListAlbums";
import { useGetAlbumsByUserId } from "../../api/album/useGetAlbumsByUser";
import './../../style/circular.scss';
import { Card } from "../common/ListCard";


export default function AlbumsList() {
  const { id } = useParams();
  const albums = useGetAlbumsByUserId(id || "");

  if (!albums) {
    return <CircularProgress className='circular' />;
  }

  return (
    <Card name={""} title={""} description={""}>
      <List data={albums} />
    </Card>
  );
};
