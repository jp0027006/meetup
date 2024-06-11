import React from "react";
import './NavBar.css';
import search_icon from  './images/search_icon.png'

function NavBar() {
    return (
        <div className="NavBar">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">MEETUP</a>
                    
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search events" aria-label="Search"/>
                        <input className="form-control me-2" type="search" placeholder="Ahmedabad, IN" aria-label="Search"/>
                        <button className="btn btn-danger" type="submit"> <img src={search_icon} alt="icon_not_found" style={{height: '80%', width: "100%"}}/> </button>
                    </form>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#">English</a></li>
                        <li className="nav-item"><button type="button" className="btn btn-link">Log in</button></li>
                        <li className="nav-item"><button className="btn btn-teal" type="submit">Sign up</button></li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;