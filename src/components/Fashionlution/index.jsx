import React from 'react';
import '../../styles/projectdetails.css';
import erd from '../../images/erd_fashionlution.jpeg';
import fashionHomepage from '../../images/fashionlution_homepage.jpg';
import fashionShopping from '../../images/fashionlution_shopping.jpg';
import adminProducts from '../../images/fashionadmin_products.jpg';
import adminOrders from '../../images/fashionadmin_orders.jpg';

const Fashionlution = () => {
  return (
    <div className='portfolio-item-individual'>
      <h2>Summary</h2>
      <p>
        Fashionlution is a project that i made as a final project in my web
        developer fullstack bootcamp. It is a web application that serves as a
        fashion marketplace. It consists of three part: dashboard page which
        used by customer to browser and order, admin page where the store admin
        can manage the products and orders received, and the last is the server
        that provide API to get and manipulate data stored in database. This
        project is developed mostly using Javacript where React is used for the
        frontend, NodeJS with Express for the backend, and then postgresql as
        the database.
      </p>
      <h2>Technology</h2>
      <p>
        As explained above, this project is made entirely in Javascript, from
        the frontend to the backend, all is made using javascript. For more
        details on what package, library, framework, that i use for each part,
        see details below:
      </p>
      <ul className='technology'>
        <li className='technology-item'>
          <h3>Frontend</h3>
          <p>
            ReactJS is used for the frontend, and most of the styling use
            bootstrap and bootstrap icon for the icons. This web app need to
            save some temporary data so react redux is used for the state
            management.
          </p>
        </li>
        <li className='technology-item'>
          <h3>Backend</h3>
          <p>
            For the backend, the technology used is ExpressJS for the framework.
            To handle the authentication, the backend use jsonwebtoken. This
            project use postgresql for the database, and the ORM used to connect
            it from the backend is sequelize. The backend also implement some
            security measure by adding some libraries such as helmet, xss-clean,
            and express-rate-limit.
          </p>
        </li>
        <li className='technology-item'>
          <h3>Database</h3>
          <p>
            This app use postgresql as the database. The database contains some
            data that used for the dashboard. As for the detail of the data, you
            can see it from the ERD below. As explained before, sequelize is
            used to connect the backend to this database. the backend also uses
            sequelize to migrate and seed data into this database.
          </p>
          <img src={erd} alt='erd' />
        </li>
      </ul>
      <h2>More Details</h2>
      <p>
        as explained before, this project/app is an fashion marketplace.
        essentialy, it is a web that serve to users, the customers that want to
        buy fashion stuff &#40;clothes, shoes, glasses, etc&#41;. The dashboard
        page serves as the interface for the customers, and the admin page
        serves as the interface for the admin. The details for each part will be
        explained below:
      </p>
      <ul className='details'>
        <li className='detail-item'>
          <h3>Dashboard Page</h3>
          <p>
            dashboard page is the page that the customer will go when they want
            to buy the products. They will first be meet with the homepage which
            doesn't really have anything other than some jargons. You can see
            the homepage in the first image. The real stuff is in the shopping
            page which you can go by pressing the "Shop Now" button. You will be
            directed to the shopping page where you can see the stuff that the
            store sells. You can see the shopping page in the second image.
            There's still a lot of pages there but it will be too much
            explanation which may be boring. Please try the web for yourself if
            you want to find out more! by the way, you need to login to try
            buying stuff so try registering an account beforehand.
          </p>
          <img src={fashionHomepage} alt='fashion-homepage' />
          <img src={fashionShopping} alt='fashion-shopping' />
        </li>
        <li className='detail-item'>
          <h3>Admin Page</h3>
          <p>
            Admin page is where the admin of the store manage products and
            orders that they received. We can add, edit and remove products that
            will be displayed in dashboard page. We can also see the list of
            orders and edit it by giving the receipt code. But the orders
            function is still incomplete right now and will be fixed in later
            update. The first image is the products list and the second image is
            the orders list page. This website also requires login to use, so
            don't forget to create an account first.
          </p>
          <img src={adminProducts} alt='fashion-admin-products' />
          <img src={adminOrders} alt='fashion-admin-orders' />
        </li>
      </ul>
      <h2>Addendum</h2>
      <p>
        This app is defintely not perfect, i'm still trying to fix and change
        some parts to make it a lot better so forgive me for that. You can also
        send me some suggestion for this app through my socials if you want,
        that will be really apreciated! Anyway, this has been too long, so i'll
        list the links to each part and their github's page. Happy shopping!
      </p>
      <ul>
        <li>
          Dashboard Page
          <ul>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://fashion-client.fly.dev/'
              >
                fashionlution
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/DzakiyH/fashion-client'
              >
                github
              </a>
            </li>
          </ul>
        </li>
        <li>
          Admin Page
          <ul>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://fashion-server.fly.dev/'
              >
                fashion-admin
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/DzakiyH/fashion-admin'
              >
                github
              </a>
            </li>
          </ul>
        </li>
        <li>
          Server Page
          <ul>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://fashion-server.fly.dev/'
              >
                API lists
              </a>
            </li>
            <li>
              <a
                target='_blank'
                rel='noopener noreferrer'
                href='https://github.com/DzakiyH/fashion-server'
              >
                github
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Fashionlution;
