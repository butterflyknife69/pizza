import React from 'react';

const Footer = () => {
  // Отримуємо поточний рік для відображення у футері
  const currentYear = new Date().getFullYear();

  // Функція для обробки кліків по посиланням у футері
  const handleLinkClick = (event, link) => {
    event.preventDefault();
    // Тут можна реалізувати логіку для переходу на інші сторінки або ресурси
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
    </footer>
  );
};

export default Footer;
