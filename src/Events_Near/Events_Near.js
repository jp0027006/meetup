import React from 'react';
import './Events_Near.css';
import edit_btn from '../images/edit_btn.png';  
import DisplayData from '../ForDisplayData/DisplayData'; 
import Events_Near_Data from '../AppData.json'; 

function Events_Near() {
    return (
        <div className="Events_Near">
            <div className="event_header">
                <h2>Events near <button className="btn event_near_btn">Ahmedabad, IN <div className="event_near_btn_img"> <img src="https://secure.meetupstatic.com/next/images/design-system-icons/edit.svg" /> </div> </button> </h2>
                <a href="#" className="see_all_event_link"> See all events </a>
            </div>
            <div className="event_main_sec">
                {
                    Events_Near_Data.NearEvent.map(event => (  
                        <DisplayData key={event.id} event={event}/>  
                    ))
                }
            </div>
        </div>
    );
}

export default Events_Near;
