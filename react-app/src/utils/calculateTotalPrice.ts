import Menu from '../type/Menu';

export default function calculateTotalPrice(selectedFood: Menu[]) {
  return selectedFood.reduce((acc: number, cur: Menu) => (acc + cur.price), 0);
}
