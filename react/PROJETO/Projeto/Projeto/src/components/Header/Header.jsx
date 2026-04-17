import NavBar from '../NavBar/NavBar'
import './Header.css'

const Header = () => {
  return (
    
    <header className="header">
      <div className="logo">
        <img src="/logoHenry2.png" alt="HenryCar Logo" />
      </div>

      <NavBar />
    </header>
    
  )
}

export default Header