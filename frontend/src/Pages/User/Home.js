import Header from './Header';
import Footer from './Footer';
import '../../Assets/CSS/userstyling.css';

function CollegeLandingPage() {
  return (
    <div>
      <Header />
      <section id="hero" className="fade-in">
        <div className="hero-content">
          <h1>Welcome to College Name</h1>
          <p>Prepare for the future with our comprehensive programs</p>
          <a href="#admissions" className="btn">Apply Now</a>
        </div>
      </section>
      <section id="about">
        <div className="section-content">
          <h2>About Us</h2>
          <p>We offer a wide range of programs and opportunities for students to excel in their chosen fields. Our campus is equipped with state-of-the-art facilities and our faculty are experts in their fields.</p>
          <img src="path/to/about-image.jpg" alt="Campus Image" className="section-image"/>
        </div>
      </section>
      <section id="programs">
        <div className="section-content">
          <h2>Our Programs</h2>
          <div className="course-grid">
            <div className="course-card">
              <img src="path/to/image1.jpg" alt="Course 1"/>
              <h3>Course 1</h3>
              <p>Course 1 description.</p>
              <a href="#course1-details" className="btn">Learn More</a>
            </div>
            <div className="course-card">
              <img src="path/to/image2.jpg" alt="Course 2"/>
              <h3>Course 2</h3>
              <p>Course 2 description.</p>
              <a href="#course2-details" className="btn">Learn More</a>
            </div>
            <div className="course-card">
              <img src="path/to/image3.jpg" alt="Course 3"/>
              <h3>Course 3</h3>
              <p>Course 3 description.</p>
              <a href="#course3-details" className="btn">Learn More</a>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="section-content">
          <h2>Contact Us</h2>
          <p>If you have any questions, feel free to reach out to us at <a href="mailto:info@college.com">info@college.com</a> or call us at (123) 456-7890.</p>
          <div className="contact-details">
            <p><strong>Address:</strong> 123 College St, City, State</p>
            <p><strong>Follow Us:</strong></p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">FB</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">TW</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">IG</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default CollegeLandingPage;
