import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li><Link to="/#home">Home</Link></li>
        <li><Link to="/#sobre">Sobre</Link></li>
        <li><Link to="/#cards">Veículos</Link></li>
        <li><Link to="/#contato">Contato</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;