import Menu from '../type/Menu';
import calculateTotalPrice from '../utils/calculateTotalPrice';

const url = 'http://localhost:3000/orders';

export default function useCreateOrder() {
  const createOrder = async (selectedMenu: Menu[]) => {
    const totalPrice = calculateTotalPrice(selectedMenu);
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ selectedMenu, totalPrice }),
    });
    const { receipt } = await response.json();

    return receipt;
  };

  return { createOrder };
}
