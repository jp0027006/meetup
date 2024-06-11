// Events_Near_Module.js
import React from 'react';
import "./Events_Near_Module.css"

const Events_Near_Module = ({ event }) => {
    if (!event) {
        return null;
    }

    return (
        <div className="event_module">
            <img className='UE_images' src={`../images/${event.UE_Photo}`} alt={event.UE_Name} height="100%" width= "100%"/>
            <h3>{event.UE_Name}</h3>
            <p>{event.UE_HostedBy}</p>
            <p>{event.UE_Time_Date}</p>
            <p>{event.UE_Visitor}</p>
            <p>{event.UE_price}</p>
        </div>
    );
};

export default Events_Near_Module;
