import React from 'react';
import './DisplayData.css';
import UE_Temp_Photo from '../images/upcoming_event_photos/AWS_Community_Day.png'

const DisplayData = ({ event }) => {
    if (!event) {
        return null;
    }
    
    return (
        <div className="event_module">
            <img className='UE_images' src={UE_Temp_Photo} alt={event.UE_Name} height="100%" width="100%"/> 

            {/* <img className='UE_images' src={`../images/upcoming_event_photos/${event.UE_Photo}`} alt={event.UE_Name} height="100%" width="100%"/>  */}
            <h5 className='UE_name'>{event.UE_Name}</h5>
            <p className='UE_hostby'>{event.UE_HostedBy}</p>
            <p className='UE_time_date'>{event.UE_Time_Date}</p>
            <div className="vis_price_con">
                <p className='UE_visitors'>{event.UE_Visitor}</p>
                <p className='UE_price'>{event.UE_price}</p>
            </div>
        </div>
    );
};

export default DisplayData;
