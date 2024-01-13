import { useEffect, useState } from "react";
import axios from "axios";

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  completed: string;
}

export function useGetToDoByUserId(userId: string) {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
        const data: ToDo[] = response.data;

        const todosWithUrls = data.map((todo) => ({
          ...todo,
        }));

        setTodos(todosWithUrls);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchData();
  }, [userId]);

  return todos;
}
