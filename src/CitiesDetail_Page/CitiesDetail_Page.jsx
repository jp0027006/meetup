import React from "react";
import { useParams } from 'react-router-dom';
import AppData from '../AppData.json'

const CitiesDetail_Page = () => {
    const { id } = useParams();
    const Cities = AppData.Cities.find(Cities => Cities.id === id);
    console.log(Cities);
    
    if (!Cities) {
        return <div className="EventDetail_Page">Event not found</div>;
    }
    
    return (
        <div className="CitiesDetail_Page">
            hello
        </div>
    )
}


export default CitiesDetail_Page