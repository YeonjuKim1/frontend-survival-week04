import Menu from './Menu';

interface Receipt {
  id: string,
  menus: Menu[],
  totalPrice: number,
}

export default Receipt;
