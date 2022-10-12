import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <a href='#' className='footer-link'>
        email
      </a>
      <ul className='social-list'>
        <li className='social-list-item'>
          <a href='#' className='social-list-link'>
            <i className='fa-brands fa-github'></i>
          </a>
        </li>
        <li className='social-list-item'>
          <a href='#' className='social-list-link'>
            <i className='fa-brands fa-facebook'></i>
          </a>
        </li>
        <li className='social-list-item'>
          <a href='#' className='social-list-link'>
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
