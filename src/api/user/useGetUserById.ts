import { useEffect, useState } from "react";
import axios from "axios";

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string
}

export function useGetUserById(userId: string) {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const data: User = response.data;
        setUser(data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchData();
  }, [userId]);

  return user;
}
