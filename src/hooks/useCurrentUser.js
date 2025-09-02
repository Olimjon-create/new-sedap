import { useEffect, useState } from "react";
import useFetchApiItems from "./useFetchApilItems";

export default function useCurrentUser() {
  const [user, setUser] = useState(null);
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userFromStorage = localStorage.getItem("user");
      let parsedUser = null;

      try {
        if (userFromStorage && userFromStorage !== "undefined") {
          parsedUser = JSON.parse(userFromStorage);
        }
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error);
        parsedUser = null;
      }

      setUser(parsedUser);
    }
  }, []);

  const [restaurants, isResLoading] = useFetchApiItems(
    user?.documentId
      ? `/restaurants?filters[users][documentId][$eqi]=${user.documentId}`
      : null
  );

  useEffect(() => {
    if (restaurants && restaurants.length > 0) {
      setRestaurant(restaurants[0]);
    }
  }, [restaurants]);

  if (!user) return null;

  return {
    ...user,
    restaurant,
  };
}
