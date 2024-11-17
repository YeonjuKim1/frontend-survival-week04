import Menu from '../type/Menu';
import calculateTotalPrice from '../utils/calculateTotalPrice';

type OrderButtonProp = {
  selectedMenu: Menu[],
  onClick: () => void,
}

export default function OrderButton({
  selectedMenu, onClick,
}: OrderButtonProp) {
  const totalPrice = calculateTotalPrice(selectedMenu);

  return (
    <button
      type="button"
      onClick={onClick}
    >
      합계:
      {' '}
      {totalPrice.toLocaleString()}
      원 주문
    </button>
  );
}
