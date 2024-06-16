import React from 'react';
import { useParams } from 'react-router-dom';
import AppData from '../AppData.json';

const EventDetail_Page = () => {
    const { id } = useParams();
    const event = AppData.NearEvent.find(event => event.id === id) || 
                  AppData.UpcomingOnlineEvents.find(event => event.id === id);

    if (!event) {
        return <div className="EventDetail_Page">Event not found</div>;
    }

    return (
        <div className="EventDetail_Page">
            <h1>{event.UE_Name}</h1>
            <img src={require(`../images/upcoming_event_photos/${event.UE_Photo}`)} alt={event.UE_Name} />
            <p>{event.UE_HostedBy}</p>
            <p>{event.UE_Time_Date}</p>
            <p>{event.UE_Visitor}</p>
            <p>{event.UE_price}</p>
        </div>
    );
};

export default EventDetail_Page;
