// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => {
  ;<nav className="nav-header">
    <div className="title-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        className="logo"
        alt="wave"
      />
      <h1 className="heading">Wave</h1>
    </div>
    <nav className="nav-menu">
      <li className="link-item">
        <Link to="/" className="route-link">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link to="/about" className="route-link">
          About
        </Link>
      </li>
      <li className="link-item">
        <Link to="/contact" className="route-link">
          Contact
        </Link>
      </li>
    </nav>
  </nav>
}

export default Header
