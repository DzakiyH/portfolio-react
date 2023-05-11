import React from 'react';
import '../../styles/footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <button
        onClick={(e) => {
          window.location.href = 'mailto:dharissalam@gmail.com';
          e.preventDefault();
        }}
        className='footer-link'
      >
        dharissalam@gmail.com
      </button>
      <ul className='social-list'>
        <li className='social-list-item'>
          <a href='https://github.com/DzakiyH' className='social-list-link'>
            <i className='fa-brands fa-github'></i>
          </a>
        </li>
        <li className='social-list-item'>
          <a
            href='https://www.linkedin.com/in/dzakiy-harissalam-515736147/'
            className='social-list-link'
          >
            <i className='fa-brands fa-linkedin'></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
