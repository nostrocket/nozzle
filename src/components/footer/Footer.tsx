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
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  )
}