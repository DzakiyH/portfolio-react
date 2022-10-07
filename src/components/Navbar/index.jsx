import React from 'react';

const Navbar = () => {
  return (
    <header>
      <div className='logo'>
        <img src='' alt='logo' />
      </div>
      <button className='nav-toggle' aria-label='toggle-navigation'>
        <span className='hamburger'></span>
      </button>
      <nav className='nav'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#home' className='nav-link'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#services' className='nav-link'>
              Services
            </a>
          </li>
          <li className='nav-item'>
            <a href='#about' className='nav-link'>
              About
            </a>
          </li>
          <li className='nav-item'>
            <a href='#work' className='nav-link'>
              Work
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
