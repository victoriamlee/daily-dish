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

  const fetchRecipes = async (searchTerm, pageNumber = 1, cuisine = '') => {
    setLoading(true)
    setPage(pageNumber)

    const offset = (pageNumber - 1) * 5
    const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${searchTerm}&number=5&offset=${offset}&cuisine=${cuisine}`

    // fetch data
    try {
      const response = await fetch(url)
      const data = await response.json()
      setRecipes(data.results || [])
      setRecipesCount(data.totalResults || 0)
    } catch (error) {
      console.error('Error fetching recipes:', error)
    } finally {
      setLoading(false)
    }
  }

  const handlePaginationChange = (newPage) => fetchRecipes(searchTerm, newPage)

  return (
    <div style={{ padding: '15px 105px' }}>
      <h2>Search for recipe ideas!</h2>
      <SearchBar
        searchTerm={searchTerm}
        page={page}
        onSearch={fetchRecipes}
        setSearchTerm={setSearchTerm}
      />
      <CuisineSelect
        searchTerm={searchTerm}
        page={page}
        handleSearch={fetchRecipes}
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
