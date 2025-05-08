import { Pagination, Card, Spin } from 'antd'
import { useNavigate } from 'react-router-dom'

function RecipesList({
  loading,
  recipes,
  recipesCount,
  page,
  handlePaginationChange,
}) {
  const navigate = useNavigate()

  const handleClick = (id) => navigate(`/recipes/${id}`)

  return (
    <Spin spinning={loading}>
      {recipes?.map((recipe, index) => (
        <div key={index} style={styles.cardWrapper}>
          <Card
            hoverable
            onClick={() => handleClick(recipe.id)}
            style={styles.card}
          >
            <img alt={recipe.title} src={recipe.image} />
            <h1 style={styles.title}>{recipe.title}</h1>
          </Card>
        </div>
      ))}
      {recipesCount > 0 && (
        <div style={styles.pagination}>
          <Pagination
            align='center'
            total={recipesCount}
            current={page}
            pageSize={5}
            onChange={handlePaginationChange}
            showSizeChanger={false}
          />
        </div>
      )}
    </Spin>
  )
}

const styles = {
  cardWrapper: {
    padding: '10px 40px',
  },
  card: {
    maxWidth: '1000px',
    margin: '0 auto',
    borderRadius: '12px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
    cursor: 'pointer',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Georgia, serif',
    color: '#333',
  },
  pagination: {
    textAlign: 'center',
    marginTop: '2rem',
  },
}

export default RecipesList
