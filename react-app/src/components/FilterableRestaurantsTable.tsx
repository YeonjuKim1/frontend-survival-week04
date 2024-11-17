import Restaurant from '../type/Restaurant';
import RestaurantsInCategory from './RestaurantsInCategory';

type FilterableRestaurantsTableProps = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsTable({
  restaurants,
}: FilterableRestaurantsTableProps) {
  return (
    <>
      <thead>
        <tr>
          <th>식당 이름</th>
          <th>종류</th>
          <th>메뉴</th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => (
          <RestaurantsInCategory
            key={restaurant.name}
            restaurant={restaurant}
          />
        ))}
      </tbody>
    </>
  );
}
