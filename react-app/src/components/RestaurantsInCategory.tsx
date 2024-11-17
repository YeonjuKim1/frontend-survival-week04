import Restaurant from '../type/Restaurant';
import MenuInRestaurant from './MenuInRestaurant';

type RestaurantsInCategoryProps = {
  restaurant: Restaurant;
}

export default function RestaurantsInCategory({
  restaurant,
}: RestaurantsInCategoryProps) {
  return (
    <tr key={restaurant.id}>
      <td>{restaurant.name}</td>
      <td>{restaurant.category}</td>
      <td>
        <MenuInRestaurant
          menus={restaurant.menu}
        />
      </td>
    </tr>
  );
}
