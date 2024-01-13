import { useEffect, useState } from "react";
import axios from "axios";

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export function useGetCommentsByPostId() {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/comments`);
        const data: Comment[] = response.data;

        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchData();
  }, []);

  return comments;
}
