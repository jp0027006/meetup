import React from "react";
import './NavBar.css';
import search_icon from '../images/search_icon.png';
import logo from'../images/meetup_logo.png';
import world_icon from '../images/world.png'

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand me-4" href="#">
                        <img src={logo} alt="Bootstrap" width="100" height="100"/>
                    </a>
                    <form className="d-flex me-auto form_search" role="search">
                        <div className="form-control search_sec_1">
                            <div className="search_sec_1_part1">
                                <img src="https://secure.meetupstatic.com/next/images/design-system-icons/search-outline.svg" alt="S" />
                            </div>
                            <div className="search_sec_1_part2">
                                 <input className="search_filed" type="search" placeholder="Search events" aria-label="Search"  />
                            </div>
                        </div>
                        <input className="form-control search_sec_2" type="search" placeholder="Ahmedabad, IN" aria-label="Search"/>
                        <button className="btn search_btn" type="submit">
                            <img src={search_icon} alt="icon_not_found" height="100%" width="100%"/>
                        </button>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn btn-link launguage_btn me-1"> 

                                    <img src="https://secure.meetupstatic.com/next/images/design-system-icons/globe-outline.svg"/>

                                     English
                                     
                                </button>
                            </li>
                            <li className="nav-item">
                                <button type="button" className="btn btn-link login_btn me-2">Log in</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn signup_btn" type="submit">Sign up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
