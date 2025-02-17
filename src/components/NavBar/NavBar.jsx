import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="src/components/NavBar/Images/Icon.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/about">About Me</Link></li>
      </ul>
    </div>
  );
}
