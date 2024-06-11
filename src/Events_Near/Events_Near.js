import React from 'react';
import './Events_Near.css';
import edit_btn from '../images/edit_btn.png';  
import Events_Near_Module from './Events_Near_Module'; 
import Events_Near_Data from '../AppData.json'; 

function Events_Near() {
    return (
        <div className="Events_Near">
            <div className="event_header">
                <h2>Events near <button className="btn event_near_btn">Ahmedabad, IN <div className="event_near_btn_img">  </div> </button> </h2>
                <a href="#" className="see_all_event_link"> See all events </a>
            </div>
            <div className="event_main_sec">
                {
                    Events_Near_Data.UpcomingEvent.map(event => (  
                        <Events_Near_Module key={event.id} event={event}/>  
                    ))
                }
            </div>
        </div>
    );
}

export default Events_Near;
