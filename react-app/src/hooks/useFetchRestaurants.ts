import { useEffect, useState } from 'react';
import Restaurant from '../type/Restaurant';

export default function useFetchRestaurants() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  useEffect(() => {
    const fetchetchRestaurants = async () => {
      const url = 'http://localhost:3000/restaurants';
      const response = await fetch(url);
      const data = await response.json();
      setRestaurants(data.restaurants);
    };
    fetchetchRestaurants();
  }, []);
  return restaurants;
}
