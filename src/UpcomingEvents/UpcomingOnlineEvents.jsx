import React from "react";
import DisplayData from '../HomeScreenLayout_ForDisplayData/DisplayData'; 
import Events_Near_Data from '../AppData.json'; 

function UpcomingOnlineEvents()
{
    return(
        <div className="UpcomingOnlineEvents">
            <div className="event_header">
                <h2>Upcoming online events</h2>
                <a href="#" className="see_all_event_link"> See all events </a>
            </div>
            <div className="event_main_sec">
                {
                    Events_Near_Data.UpcomingOnlineEvents.map(event => (  
                        <DisplayData key={event.id} event={event}/>  
                    ))
                }
            </div>
        </div>
    )
}

export default UpcomingOnlineEvents