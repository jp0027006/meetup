import React from 'react';
import { Link } from 'react-router-dom';
import './DisplayData.css';
import UE_Temp_Photo from '../images/upcoming_event_photos/AWS_Community_Day.png'
import cal_photo from '../images/calendar.png'
import visitor_icon from '../images/correct_icon.png'
import price_icon from '../images/ticket.png'

const DisplayData = ({ event }) => {
    if (!event) {
        return null;
    }

    return (
        <Link to={`/events-near/${event.id}`} className="event_module">
            <img className='UE_images' src={`./images/upcoming_event_photos/${event.UE_Photo}`} alt={event.UE_Name} height="100%" width="100%"/>
            <h5 className='UE_name'>{event.UE_Name}</h5>
            <p className='UE_hostby'>Hosted by: {event.UE_HostedBy}</p>
            <div className='UE_time_date'>
                <div className="UE_time_date_1">
                    <img src={cal_photo} height="100%" width="100%"/>   
                </div>
                <div className="UE_time_date_2">
                    {event.UE_Time_Date}
                </div>         
            </div>z``
            <div className="vis_price_con">
                <p className='UE_visitors'> <img src={visitor_icon} alt="Visitors" /> {event.UE_Visitor}</p>
                <p className='UE_price'>  <img src={price_icon} alt="Price" />  {event.UE_price}</p>
            </div>
        </Link>
    );
};

export default DisplayData;
