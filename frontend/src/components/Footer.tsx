import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="https://github.com/Rom7699" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/rom-eisenberg-a80a14212/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:rom7699@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Rom Eisenberg. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;