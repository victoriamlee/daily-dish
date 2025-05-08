import { Input } from 'antd'

const { Search } = Input

function SearchBar({ searchTerm, onSearch, setSearchTerm }) {
  const handleInputChange = (e) => setSearchTerm(e.target.value)

  return (
    <>
      <Search
        style={{ maxWidth: 450 }}
        placeholder='Search'
        onChange={handleInputChange}
        onSearch={() => onSearch(searchTerm)}
        enterButton
      />
    </>
  )
}

export default SearchBar
