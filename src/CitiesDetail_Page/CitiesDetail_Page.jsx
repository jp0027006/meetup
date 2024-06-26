import React from "react";
import './CitiesDetail_Page.css'
import { useParams } from 'react-router-dom';
import AppData from '../AppData.json'
import NavBar_LS from '../NavBar_LS/NavBar'
import NavBar_SS from '../NavBar_SS/NavBar'
import NewYork from '../images/cities/NewYork_Details.png'
import Footer from "../Footer/Footer";

const CitiesDetail_Page = () => {
    const { id } = useParams();
    const Cities = AppData.Cities.find(Cities => Cities.id === id);
    console.log(Cities);
    
    if (!Cities) {
        return <div className="EventDetail_Page">Event not found</div>;
    }
    
    return (
        <div className="CitiesDetail_Page">
            <div className="navbar_LS">
                <NavBar_LS />        
            </div>
            <div className="navbar_SS">
                <NavBar_SS />        
            </div>
            <div className="Events_In_City">
                <div className="Events_In_City_sub">
                    <div className="Events_In_City_part1">
                        <h5>Events in</h5>
                        <h1 className="City_D_name">{Cities.CityName}</h1>
                        <p className="City_D_info">{Cities.CityInfo}</p>
                    </div>
                    <div className="Events_In_City_part2"> <img src={`../images/cities/${Cities.CityPhoto}`} alt={Cities.CityName} height="100%" width="100%" /> </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default CitiesDetail_Page