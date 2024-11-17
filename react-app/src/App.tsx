import { useState } from 'react';
import { useInterval, useLocalStorage } from 'usehooks-ts';

import useFetchRestaurants from './hooks/useFetchRestaurants';

import SearchBar from './components/SearchBar';
import FilterableRestaurantsTable from './components/FilterableRestaurantsTable';
import Cart from './components/Cart';
import ReceiptPrinter from './components/ReceiptPrinter';

import Receipt from './type/Receipt';

import filterRestaurants from './utils/filterRestaurants';

export default function App() {
  // 메뉴 리스트
  const restaurants = useFetchRestaurants();
  const [filterText, setFilterText] = useState<string>('');
  const [filterCategory, setFilterCategory] = useState<string>('한식,중식,일식');

  // 주문
  const emptyReceipt = {} as Receipt;
  const [receipt, setReceipt] = useLocalStorage<Receipt>('receipt', emptyReceipt);

  useInterval(() => {
    setReceipt(emptyReceipt);
  }, receipt.id ? 5000 : null);

  const filteredRestaurants = filterRestaurants(restaurants, {
    filterText, filterCategory,
  }).filter((restaurant) => filterCategory.includes(restaurant.category));
  return (
    <>
      <h1>푸드코트 키오스크</h1>
      {/* 점심 바구니 - 선택한 메뉴 리스트 */}
      <Cart
        setReceipt={setReceipt}
      />
      {/* 메뉴 검색 */}
      <SearchBar
        filterText={filterText}
        setFilterText={setFilterText}
        setFilterCategory={setFilterCategory}
      />
      {/* 메뉴 리스트 */}
      <table>
        <FilterableRestaurantsTable
          restaurants={filteredRestaurants}
        />
      </table>
      {/* 영수증 출력 */}
      <ReceiptPrinter
        receipt={receipt}
      />
    </>
  );
}
