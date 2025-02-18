import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/f55c97e7-a3ba-455b-9cac-392baf83791f-profile_image-70x70.png" alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/characters">Characters</Link></li>
        <li><Link to="/about">About Me</Link></li>
      </ul>
    </div>
  );
}
