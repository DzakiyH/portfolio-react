import React from 'react';
import '../../styles/navbar.css';

const Navbar = () => {
  const toggleNavbar = () => {
    document.body.classList.toggle('nav-open');
  };

  const linkClicked = () => {
    document.body.classList.remove('nav-open');
  };

  return (
    <header>
      <div className='logo'>
        <img src='' alt='logo' />
      </div>
      <button
        className='nav-toggle'
        aria-label='toggle-navigation'
        onClick={toggleNavbar}
      >
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#home' className='nav-link' onClick={linkClicked}>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#services' className='nav-link' onClick={linkClicked}>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a href='#about' className='nav-link' onClick={linkClicked}>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#work' className='nav-link' onClick={linkClicked}>
              Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
