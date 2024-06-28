import React from "react";
import { Link } from 'react-router-dom';
import './See_all_event_display_data.css'
import upload_icon from '../images/upload_icon_gray.png'

const See_all_event_display_data = ({ event }) => {
    if (!event) {
        return null;
    }

    return (
        <Link to={`/events-near/${event.id}`} >        
            <div className="See_all_event_display_data">
                <div className="See_all_event_display_data_img">
                    <img className='see_all_images' src={`./images/upcoming_event_photos/${event.UE_Photo}`} alt={event.UE_Name} height="100%" width="100%"/>
                </div>
                <div className="See_all_event_display_data_details">
                    <div className="See_all_event_display_data_details_part_1">    
                        <div className="See_all_time_date">{event.UE_Time_Date}</div>
                        <div className="See_all_name">{event.UE_Name}</div>
                        <div className="See_all_host_by">{event.UE_HostedBy}</div>
                    </div>
                    <div className="See_all_event_display_data_details_part_2">
                        <div className="See_all_Visitor">{event.UE_Visitor}</div>      
                        <div className="share_icon"> <img src={upload_icon} alt="S" height="100%" width="100%" /> </div>      
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default See_all_event_display_data;