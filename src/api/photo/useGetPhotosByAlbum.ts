import { useEffect, useState } from "react";
import axios from "axios";

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export function useGetPhotosByAlbumId(albumId: string) {
  const [photos, setPhotos] = useState<Photo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
        const data: Photo[] = response.data.map((photo: Photo) => ({
          ...photo,
          url: `https://picsum.photos/id/${photo.id + 1}/600/400`,
        }));
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchData();
  }, [albumId]);

  return photos;
}
