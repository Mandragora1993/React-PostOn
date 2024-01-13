import { useEffect, useState } from "react";
import axios from "axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  url: string;
}

export function useGetPosts() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/`);
        const data: Post[] = response.data.map((post: Post) => ({
          ...post,
          url: `https://picsum.photos/id/${post.id + 3}/600/200`,
        }));
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);

  return posts;
}
