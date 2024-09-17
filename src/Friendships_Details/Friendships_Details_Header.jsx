import React from "react";
import './Friendships_Details_Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Friendships_Details_Header = () => {
  return (
    <div className="Friendships_Details_Header">
      <div className="container">
        <a href="/" className="logo">
          <img alt="Meetup Blog - Community Matters" src="https://www.meetup.com/blog/wp-content/uploads/2019/12/meetup-logo-m-swarm.svg"/>
          <a className="logotxt" href="/community">Community <br/> Matters</a>
        </a>
        <a href="#" className="FDH_options">Organizer Guide <br />Product Updates</a>
        <a href="#" className="FDH_options">Keep Connected Podcast</a>
        <a href="#" className="FDH_options">Meetup Live</a>
        <a href="#" className="FDH_options">Local Guides</a>
        <div className="search">
          <button>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ fontSize: '1.5rem', opacity: "0.5"}} />
            </a>
          </button>
        </div>
        <button className="cta">Get the newsletter</button>
      </div>
    </div>
  );
};

export default Friendships_Details_Header;
