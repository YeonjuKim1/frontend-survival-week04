import { useLocalStorage } from 'usehooks-ts';
import Menu from '../type/Menu';

type MenuInRestaurantProps = {
  menus: Menu[];
}

export default function MenuInRestaurant({
  menus,
}: MenuInRestaurantProps) {
  const [selectedMenu, setSelectedMenu] = useLocalStorage<Menu[]>('cart', []);
  const handleClick = (menu: Menu) => {
    setSelectedMenu([...selectedMenu, menu]);
  };
  return (
    <ul>
      {menus.map((menu: Menu) => (
        <li key={menu.id}>
          {menu.name}
          (
          {menu.price}
          원)
          <button
            style={{ marginLeft: '.5rem' }}
            type="button"
            name={`#${menu.name}`}
            onClick={() => handleClick(menu)}
          >
            선택
          </button>
        </li>
      ))}
    </ul>
  );
}
