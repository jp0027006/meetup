import React from "react";
import DisplayData from '../HomeScreenLayout_ForDisplayData/DisplayData'; 
import Events_Near_Data from '../AppData.json'; 
import { Link } from 'react-router-dom';
import './UpcomingOnlineEvents.css'

function UpcomingOnlineEvents()
{
    return(
        <div className="UpcomingOnlineEvents">
            <div className="event_header upcoming_event">
                <h2>Upcoming online events</h2>
                <Link to="/See_all_events" className="see_all_event_link">
                See all events
                </Link>
            </div>
            <div className="event_main_sec">
                {
                    Events_Near_Data.UpcomingOnlineEvents.map(event => (  
                        <DisplayData key={event.id} event={event}/>  
                    ))
                }
            </div>
            <Link to="/See_all_events" className="see_all_event_link_mobile">
                See all events
            </Link>
        </div>
    )
}

export default UpcomingOnlineEvents