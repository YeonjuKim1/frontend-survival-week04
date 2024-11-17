import Restaurant from '../type/Restaurant';

function normalize(text: string) {
  return text.trim().toLocaleLowerCase();
}

type FilterConditions = {
  filterText: string;
  filterCategory: string;
}

export default function filterRestaurants(
  restaurants: Restaurant[],
  { filterText, filterCategory }: FilterConditions,
): Restaurant[] {
  const filteredRestaurants = restaurants
    .filter((restaurant) => filterCategory.includes(restaurant.category));

  const query = normalize(filterText);

  if (!query) {
    return restaurants;
  }

  const contains = (restaurant: Restaurant) => (
    normalize(restaurant.name).includes(query)
  );
  return filteredRestaurants.filter(contains);
}
