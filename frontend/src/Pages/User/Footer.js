function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About</h3>
          <p>Our college is committed to providing the best education and opportunities for our students. Join us to make your dreams come true.</p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#admissions">Admissions</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact</h3>
          <p>Email: <a href="mailto:info@college.com">info@college.com</a></p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 College St, City, State</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Pranesh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
