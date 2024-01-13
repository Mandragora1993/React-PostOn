import { useEffect, useState } from "react";
import axios from "axios";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
  url: string;
}

export function useGetPostById(postId: string) {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data: Post = response.data;
        setPost({
          ...data,
          url: `https://picsum.photos/id/${data.id + 44}/600/200`,
        });
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };

    fetchData();
  }, [postId]);

  return post;
}
