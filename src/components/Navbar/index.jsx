import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = ({ home }) => {
  const navigation = ['home', 'services', 'about', 'work'];

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
      {home ? (
        <button
          className='nav-toggle'
          aria-label='toggle-navigation'
          onClick={toggleNavbar}
        >
          <span className='hamburger'></span>
        </button>
      ) : (
        <Link to='/' className='home-btn'>
          <i className='fa-sharp fa-solid fa-house home-icon'></i>
        </Link>
      )}
      <nav className='nav'>
        <ul className='nav-list'>
          {navigation.map((section) => (
            <li className='nav-item'>
              <a
                href={`#${section}`}
                className='nav-link'
                onClick={linkClicked}
              >
                Home
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
