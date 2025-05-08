import { useEffect, useState } from 'react'
import { Image, Spin, Tag } from 'antd'
import { useParams } from 'react-router-dom'

function RecipeDetails({ apiKey }) {
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [recipeDetails, setRecipeDetails] = useState(null)

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true)
        const res = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
        )
        const data = await res.json()
        setRecipeDetails(data)
      } catch (error) {
        console.error('Error fetching recipe details:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipe()
  }, [id, apiKey])

  const dietaryTags = [
    { label: 'Dairy Free', key: 'dairyFree' },
    { label: 'Gluten Free', key: 'glutenFree' },
    { label: 'Ketogenic', key: 'ketogenic' },
    { label: 'Vegan', key: 'vegan' },
    { label: 'Vegetarian', key: 'vegetarian' },
    { label: 'Whole30', key: 'whole30' },
  ]

  return (
    <Spin spinning={loading} fullscreen={loading}>
      <div style={styles.card}>
        {recipeDetails && (
          <>
            <Image
              src={recipeDetails.image}
              alt={recipeDetails.title}
              style={styles.image}
              preview={false}
            />
            <h1 style={styles.title}>{recipeDetails.title}</h1>

            <div style={styles.section}>
              <div style={styles.padding}>
                {dietaryTags.map(
                  (tag) =>
                    recipeDetails[tag.key] && (
                      <Tag key={tag.key}>{tag.label}</Tag>
                    )
                )}
              </div>
            </div>
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Ingredients</h3>
              <ul style={styles.list}>
                {recipeDetails.extendedIngredients.map((ing) => (
                  <div key={ing.id}>
                    {ing.amount} {ing.unit} {ing.originalName}
                  </div>
                ))}
              </ul>
            </div>

            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Instructions</h3>
              {recipeDetails.analyzedInstructions?.[0].steps?.map((step) => (
                <div style={styles.margin}>
                  <b>{step.number}.</b> {step.step}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </Spin>
  )
}

const styles = {
  card: {
    maxWidth: '700px',
    margin: '2rem auto',
    padding: '2rem',
    borderRadius: '16px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
    fontFamily: 'Georgia, serif',
    color: '#4b4b4b',
    border: '1px solid #e0dcd4',
    backgroundColor: '#fff8f8',
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
