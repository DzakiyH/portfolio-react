import { Link } from 'react-router-dom';
import logo from '../../images/logo_accent.png';
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
      <a href='/'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
      </a>
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
          {navigation.map((section, index) => (
            <li key={index} className='nav-item'>
              <a
                href={`#${section}`}
                className='nav-link'
                onClick={linkClicked}
              >
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
