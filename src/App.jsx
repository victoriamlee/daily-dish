import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './home-page/home-page'
import RecipeDetails from './recipe-details/recipe-details'
import AppHeader from './header/header'
import './App.css'

const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY

function App() {
  return (
    <Router>
      <div className='app-container'>
        <AppHeader />
        <main className='app-main'>
          <Routes>
            <Route path='/' element={<HomePage apiKey={API_KEY} />} />
            <Route
              path='/recipes/:id'
              element={<RecipeDetails apiKey={API_KEY} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
