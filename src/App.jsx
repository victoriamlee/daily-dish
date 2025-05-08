import { Header } from 'antd/es/layout/layout'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import HomePage from './home-page/home-page'
import RecipeDetails from './recipe-details/recipe-details'
import './App.css'

function App() {
  const apiKey = '641e8e0ca9f04d0fa76c5c470bccf3fa'

  const handleHeaderClick = () => {
    setSearchTerm('')
    handleSearch('', 1)
  }

  return (
    <Router>
      <div className='app-container'>
        <Header
          className='app-header'
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link to='/' style={{ color: 'black' }} onClick={handleHeaderClick}>
            <h1>Daily Dish</h1>
          </Link>
        </Header>
        <main className='app-main'>
          <Routes>
            <Route path='/' element={<HomePage apiKey={apiKey} />} />
            <Route
              path='/recipes/:id'
              element={<RecipeDetails apiKey={apiKey} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
