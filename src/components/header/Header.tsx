import Logo from '../logo/Logo'
import './Header.css';

function Header() {
  return (
    <header>
        <div className="logo-container">
          <Logo></Logo>
        </div>
        <nav>
            <ul className="nav-links">
                <li><a href="#section1">Section 1</a></li>
                <li><a href="#section2">Section 2</a></li>
                <li><a href="#section3">Section 3</a></li>
            </ul>
        </nav>
        <button className="sign-in">Sign In</button>
    </header>
  )
}

export default Header
