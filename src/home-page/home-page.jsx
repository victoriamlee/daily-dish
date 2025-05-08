import { useState } from 'react'
import CuisineSelect from './cuisine-select/cuisine-select'
import RecipesList from './recipes-list/recipes-list'
import SearchBar from './search-bar/search-bar'

function HomePage({ apiKey }) {
  const [loading, setLoading] = useState(false)
  const [recipes, setRecipes] = useState([])
  const [recipesCount, setRecipesCount] = useState(0)
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (searchTerm, pageNumber = 1, cuisine = '') => {
    setLoading(true)
    setPage(pageNumber)

    // fetch data
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}&number=5&offset=${
        (pageNumber - 1) * 5
      }&cuisine=${cuisine}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.results)
        setRecipesCount(data.totalResults)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching users:', error)
        setLoading(false)
      })
  }

  const handlePaginationChange = (value) => {
    handleSearch(searchTerm, value)
    setPage(value)
  }

  return (
    <div style={{ padding: '15px 105px' }}>
      <h2>Search for recipe ideas!</h2>
      <SearchBar
        searchTerm={searchTerm}
        page={page}
        onSearch={handleSearch}
        setSearchTerm={setSearchTerm}
      />
      <CuisineSelect
        searchTerm={searchTerm}
        page={page}
        handleSearch={handleSearch}
      />
      <RecipesList
        loading={loading}
        recipes={recipes}
        recipesCount={recipesCount}
        page={page}
        handlePaginationChange={handlePaginationChange}
      />
    </div>
  )
}

export default HomePage
