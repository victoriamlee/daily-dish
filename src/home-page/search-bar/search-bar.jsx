import { Input } from 'antd'

const { Search } = Input

function SearchBar({ searchTerm, onSearch, setSearchTerm }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  return (
    <>
      <Search
        style={{ maxWidth: 450 }}
        placeholder='Search'
        onChange={handleInputChange}
        onSearch={handleSearch}
      />
    </>
  )
}

export default SearchBar
