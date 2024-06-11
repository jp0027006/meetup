import "./Events_Near.css"
import edit_btn from "../images/edit_btn.png"
import Events_Near_Module from "./Events_Near_Module"
import Events_Near_Data from "../AppData.json"
{/* <img src={edit_btn} alt="edit" height="100%" width="100%" /> */}

function Events_Near(){
    return(
        <div className="Events_Near">
            <div className="event_header">
                <h2>Events near <button className="btn event_near_btn">Ahmedabad, IN <div className="event_near_btn_img">  </div> </button> </h2>
                <a href="#" className="see_all_event_link"> See all events </a>
            </div>
            <div className="event_main_sec">
                {
                    Events_Near_Data.UpcomingEvent.map (i => (
                        <Events_Near_Module key={i.id} event={i}/>
                    ))
                }
                <Events_Near_Module />
            </div>
        </div>
    )
}

export default Events_Near