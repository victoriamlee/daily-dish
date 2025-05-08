import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'

function AppHeader() {
  const handleHeaderClick = () => {
    // setSearchTerm('')
    handleSearch('', 1)
  }

  return (
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
  )
}

export default AppHeader
