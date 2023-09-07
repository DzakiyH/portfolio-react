import React from 'react';
import '../../styles/fashionlution.css';
import homepage from '../../images/musicplayer_homepage.jpg';
import manage from '../../images/musicplayer_manage.jpg';
import song from '../../images/musicplayer_song.jpg';

const MusicPlayerPage = () => {
  return (
    <div className='portfolio-item-individual'>
      <h2>Summary</h2>
      <p>
        Music Player is a web-based music player that can receive and save mp3
        file and then play it from the browser. This project was made in order
        for me to learn more about building website using Vue. The project is
        made using Vue 3 with Option API. For the database, i'm using firebase
        since again, i only focused on Vue in this project.
      </p>
      <h2>Technology</h2>
      <p>The technologies used in this project is listed below:</p>
      <ul className='technology'>
        <li className='technology-item'>
          <h3>Frontend</h3>
          <p>
            Vue Js is the main technology for this project which use Vue 3 and
            Option API. Pinia is used for the state management, vue router for
            the routing, and then vee-validate is used for the form validation
            since this web has some form in it. This web also has the capability
            to play music, and howler.js is used to do that.
          </p>
        </li>
        <li className='technology-item'>
          <h3>Backend</h3>
          <p>
            For the backend, i use Firebase for this project. it's simple, easy
            to use, and most importantly, it's free. I'm using firestore
            database to store data, firebase authentication for the
            authentication, and firebase storage to save the mp3 files.
          </p>
        </li>
        <li className='technology-item'>
          <h3>Deployment</h3>
          <p>
            Since this is quite a simple project which only focused on frontend,
            i used those simple hosting provider that does everything for you.
            Which in this case, i'm using Vercel. All i have to do is install
            Vercel CLI and perform some operation and my website is now
            deployed! Simple and easy, and it's also free which is amazing.
          </p>
        </li>
      </ul>
      <h2>More Details</h2>
      <p>
        As explained before, this is a music player website. A very simple one
        at that. It can take and store your own music files which only mp3 files
        for now. And then you and everyone accessing the website can play it
        from the browser. This website consists of three pages, Homepage, Manage
        Page, and Music Page.
      </p>
      <ul className='details'>
        <li className='detail-item'>
          <h3>HomePage</h3>
          <p>
            The Home page is the landing which will be shown whenever the
            website is visited for the first time, both logged in or not. It has
            a simple header with welcome message below the navbar. The navbar at
            the top has some navigations to use. And then the main content is
            below the header which contains the list of songs uploaded by others
            users. You can choose any song to open the song's page where you can
            play said song and see or post some comments about the song.
          </p>
          <img src={homepage} alt='musicplayer-homepage' />
        </li>
        <li className='detail-item'>
          <h3>Manage Page</h3>
          <p>
            Manage page is where the user would manage their songs. This is
            where you upload your songs into the database. the songs uploaded
            will then be showed inside this page along with any other songs
            already uploaded if any. You can also edit the description of the
            song here and you can also delete a song if you want to.
          </p>
          <img src={manage} alt='musicplayer-manage' />
        </li>
        <li className='detail-item'>
          <h3>Song Page</h3>
          <p>
            The song page is where you will end up after choosing any song in
            the Homepage. This is where you can play the song you choose by
            clicking the big play button on the top left of the page. At the
            bottom of the page is the player where you can manage the song
            currently played like pausing and playing the song at different
            part. In this page you can see the comments left by users which you
            can also cotribute.
          </p>
          <img src={song} alt='musicplayer-song' />
        </li>
      </ul>
      <h2>Addendum</h2>
      <p>
        This app is currently at the very early stage of developing. There might
        be song bugs here and there and i'm still trying to find and fix it.
        There are also some features that you might expect there but aren't
        really there, i'm also still developing them. hope that i won't be too
        lazy to do that. I might also expand this project after i'm done with
        things mentioned before so that it would be a proper music player. The
        links for this project can be found below:
      </p>
      <ul>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://simple-music-player-chi.vercel.app/'
          >
            Music Player Web
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/DzakiyH/music-player'
          >
            github
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MusicPlayerPage;
