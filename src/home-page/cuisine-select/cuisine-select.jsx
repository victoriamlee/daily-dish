import { Select } from 'antd'

const cuisineOptions = [
  { value: 'african', label: 'African' },
  { value: 'asian', label: 'Asian' },
  { value: 'american', label: 'American' },
  { value: 'british', label: 'British' },
  { value: 'cajun', label: 'Cajun' },
  { value: 'caribbean', label: 'Caribbean' },
  { value: 'chinese', label: 'Chinese' },
  { value: 'eastern_european', label: 'Eastern European' },
  { value: 'european', label: 'European' },
  { value: 'french', label: 'French' },
  { value: 'german', label: 'German' },
  { value: 'greek', label: 'Greek' },
  { value: 'indian', label: 'Indian' },
  { value: 'irish', label: 'Irish' },
  { value: 'italian', label: 'Italian' },
  { value: 'japanese', label: 'Japanese' },
  { value: 'jewish', label: 'Jewish' },
  { value: 'korean', label: 'Korean' },
  { value: 'latin_american', label: 'Latin American' },
  { value: 'mediterranean', label: 'Mediterranean' },
  { value: 'mexican', label: 'Mexican' },
  { value: 'middle_eastern', label: 'Middle Eastern' },
  { value: 'nordic', label: 'Nordic' },
  { value: 'southern', label: 'Southern' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'thai', label: 'Thai' },
  { value: 'vietnamese', label: 'Vietnamese' },
]

function CuisineSelect({ searchTerm, page, handleSearch }) {
  const handleChange = (value) => handleSearch(searchTerm, page, value)

  return (
    <div style={{ margin: '20px 0px' }}>
      <Select
        mode='multiple'
        allowClear
        showSearch
        style={{ width: 450 }}
        placeholder='Filter by cuisine'
        options={cuisineOptions}
        onChange={handleChange}
      />
    </div>
  )
}

export default CuisineSelect
