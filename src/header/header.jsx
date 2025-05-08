import { Header } from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'

function AppHeader() {
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
      <Link reloadDocument to='/' style={{ color: 'black' }}>
        <h1>Daily Dish</h1>
      </Link>
    </Header>
  )
}

export default AppHeader
