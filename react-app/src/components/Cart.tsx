import { useLocalStorage } from 'usehooks-ts';
import Receipt from '../type/Receipt';
import useCreateOrder from '../hooks/useCreateOrder';
import MenuItem from './MenuItem';
import OrderButton from './OrderButton';
import Menu from '../type/Menu';

type CartProp = {
  setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProp) {
  const [selectedMenu, setSelectedMenu] = useLocalStorage<Menu[]>('cart', []);

  const { createOrder } = useCreateOrder();

  const handleClickCancel = (index: number) => {
    const menus = selectedMenu.filter((menu, idx) => idx !== index);
    setSelectedMenu(menus);
  };

  const handleClickOrder = async () => {
    if (!selectedMenu.length) {
      return;
    }
    const receipt = await createOrder(selectedMenu);
    setReceipt(receipt);
    setSelectedMenu([]);
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h3>점심 바구니</h3>
      <ul
        style={{
          listStyleType: 'none',
          width: '30%',
        }}
      >
        {selectedMenu.map((menu, index) => {
          const key = `${menu.id}-${index}`;

          return (
            <MenuItem
              key={key}
              menu={menu}
            >
              <button
                style={{
                  marginLeft: '.5rem',
                }}
                type="button"
                name={menu.name}
                onClick={() => handleClickCancel(index)}
              >
                취소
              </button>
            </MenuItem>
          );
        })}
      </ul>
      <OrderButton
        selectedMenu={selectedMenu}
        onClick={handleClickOrder}
      />
    </div>
  );
}
