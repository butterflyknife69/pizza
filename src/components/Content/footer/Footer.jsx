import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    console.log(`Navigating to ${link}`);
  };

  return (
    <footer>
      <div>© {currentYear} MyWebsite. All rights reserved.</div>
      <nav>
        <ul>
          <li>
            <a href="/" onClick={(e) => handleLinkClick(e, '/')}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" onClick={(e) => handleLinkClick(e, '/about')}>
              About
            </a>
          </li>
          <li>
            <a href="/contact" onClick={(e) => handleLinkClick(e, '/contact')}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div>
        Follow us:
        <a href="https://twitter.com/mywebsite" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://www.facebook.com/mywebsite" target="_blank" rel="noopener noreferrer">
          Facebook
        </a>
        <a href="https://www.instagram.com/mywebsite" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
      </div>
      <div>
        <a href="/privacy-policy" onClick={(e) => handleLinkClick(e, '/privacy-policy')}>
          Privacy Policy
        </a>
        <a href="/terms-of-service" onClick={(e) => handleLinkClick(e, '/terms-of-service')}>
          Terms of Service
        </a>
      </div>
      <div>
        <p>Contact Information:</p>
        <p>Email: contact@mywebsite.com</p>
        <p>Phone: +1234567890</p>
        <p>Address: 123 Main Street, City, Country</p>
      </div>
    </footer>
  );
};

export default Footer;
