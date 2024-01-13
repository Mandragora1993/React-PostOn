import { useEffect, useState } from "react";
import axios from "axios";

export interface Album {
  userId: number;
  id: number;
  title: string;
}

export function useGetAlbums() {
  const [albums, setAlbums] = useState<Album[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/albums`);
        const data: Album[] = response.data;

        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchData();
  }, []);

  return albums;
}
