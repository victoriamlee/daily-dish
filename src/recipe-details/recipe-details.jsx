import { useEffect, useState } from 'react'
import { Image, Spin, Tag } from 'antd'
import { useParams } from 'react-router-dom'

function RecipeDetails({ apiKey }) {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState()

  const getRecipe = () => {
    setLoading(true)
    // fetch data
    fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log('recipeepepepepe', data)
        setRecipeDetails(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching users:', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    getRecipe()
  }, [])

  return (
    <Spin spinning={loading} fullscreen={loading}>
      <div style={styles.card}>
        <Image
          src={recipeDetails?.image}
          alt={recipeDetails?.title}
          style={styles.image}
          preview={false}
        />
        <h1 style={styles.title}>{recipeDetails?.title}</h1>

        <div style={styles.section}>
          <div style={styles.padding}>
            {recipeDetails?.dairyFree ? <Tag>Dairy Free</Tag> : <></>}
            {recipeDetails?.glutenFree ? <Tag>Gluten Free</Tag> : <></>}
            {recipeDetails?.ketogenic ? <Tag>Ketogenic</Tag> : <></>}
            {recipeDetails?.vegan ? <Tag>Vegan</Tag> : <></>}
            {recipeDetails?.vegetarian ? <Tag>Vegetarian</Tag> : <></>}
            {recipeDetails?.whole30 ? <Tag>Whole30</Tag> : <></>}
          </div>
        </div>
        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Ingredients</h3>
          <ul style={styles.list}>
            {recipeDetails?.extendedIngredients.map((ing) => (
              <div key={ing.id}>
                {ing.amount} {ing.unit} {ing.originalName}
              </div>
            ))}
          </ul>
        </div>

        <div style={styles.section}>
          <h3 style={styles.sectionTitle}>Instructions</h3>
          {recipeDetails?.analyzedInstructions[0].steps?.map((instruction) => (
            <div style={styles.margin}>
              <b>{instruction.number}.</b> {instruction.step}
            </div>
          ))}
        </div>
      </div>
    </Spin>
  )
}

const styles = {
  card: {
    maxWidth: '700px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fdfcf9',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    fontFamily: 'Georgia, serif',
    color: '#4b4b4b',
  },
  image: {
    width: '100%',
    borderRadius: '12px',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
    textAlign: 'center',
  },
  section: {
    marginBottom: '1.5rem',
  },
  sectionTitle: {
    fontSize: '1.25rem',
    marginBottom: '0.5rem',
    borderBottom: '1px solid #ddd',
    paddingBottom: '0.25rem',
  },
  list: {
    paddingLeft: '1rem',
    lineHeight: '1.6',
  },
  padding: {
    padding: '10px',
  },
  margin: {
    margin: '20px',
  },
}

export default RecipeDetails
