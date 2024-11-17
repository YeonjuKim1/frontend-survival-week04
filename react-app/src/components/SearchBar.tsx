type SearchBarProps = {
  filterText: string;
  setFilterText: (value: string) => void;
  setFilterCategory: (value: string) => void;
}

const CategoryData = ['전체', '중식', '한식', '일식'];

export default function SearchBar({
  filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilterText(value);
  };
  const handleCategoryChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    if (value === '전체') {
      setFilterCategory('한식,중식,일식');
    } else {
      setFilterCategory(value);
    }
  };
  return (
    <>
      <div>
        검색
        <input
          type="text"
          placeholder="식당 이름"
          value={filterText}
          onChange={handleTextChange}
        />
      </div>
      <div>
        {CategoryData.map((category) => (
          <input
            key={category}
            type="button"
            value={category}
            onClick={handleCategoryChange}
          />
        ))}
      </div>
    </>
  );
}
