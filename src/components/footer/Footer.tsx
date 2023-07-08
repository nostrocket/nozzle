import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul className="footer-links">
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#terms">Terms of Service</a></li>
        </ul>
      </nav>
      <div className="social-icons">
        <a href="https://t.me/nostrocket" target="_blank"><i className="fab fa-telegram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>
    </footer>
  )
}