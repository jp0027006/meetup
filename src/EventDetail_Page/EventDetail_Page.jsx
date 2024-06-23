import React from 'react';
import './EventDetail_Page.css'
import { useParams } from 'react-router-dom';
import AppData from '../AppData.json';
import NavBar from '../NavBar_LS/NavBar';
import saved_icon from '../images/saved_icon.png';
import upload_icon from '../images/upload_icon.png'

const EventDetail_Page = () => {
    const { id } = useParams();
    const event = AppData.NearEvent.find(event => event.id === id) || 
                  AppData.UpcomingOnlineEvents.find(event => event.id === id);

    if (!event) {
        return <div className="EventDetail_Page">Event not found</div>;
    }

    return (
        <div className="EventDetail_Page">
            <NavBar />
            <div className="name_hostedBy">
                <div className="name_hostedBy_Sub">
                    <h2 className='event_name'>{event.UE_Name}</h2>  
                    <div className='event_hostBy'> <div className="event_hostBy_title">Hosted By</div><div className="event_hostBy_name"> {event.UE_HostedBy}</div></div>
                </div>
            </div>  
            <div className="EventDetail_Page_body">
                <div className="EventDetail_Page_body_left_section">
                <img src={require(`../images/upcoming_event_photos/${event.UE_Photo}`)} alt={event.UE_Name} height="100%" width="100%" className='evenet_photo' />
                
                <div className='details_title'>Details</div>
                <div dangerouslySetInnerHTML={{ __html: event.UE_Details }} className='details_data'/>
                
                {/* <p>{event.UE_Time_Date}</p>
                <p>{event.UE_Visitor}</p>
                <p>{event.UE_price}</p> */}
                </div>
                <div className="EventDetail_Page_body_right_section">

                </div>
            </div>
            <div className="footer">
                <div className="footer_sub">
                    <div className="footer_sections_1">
                        <div className="footer_sections_date">{event.UE_Time_Date}</div>
                        <div className="footer_sections_name">{event.UE_Name}</div>
                        <div className="footer_sections_m_cost">{event.UE_price}</div>
                        <div className="footer_sections_m_attende">{event.UE_Visitor}</div>
                    </div>
                    <div className="footer_sections_2">
                        <div className="free_text me-3">FREE</div>
                        <div className="saved_icon me-3"> <img src={saved_icon} height="100%" width="100%"/> </div>
                        <button className='share_btn'> <span className="share_text"> Share </span><img src={upload_icon} height="100%" width="100%"  /> </button>
                        <button className='attend_btn'>Attend</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail_Page;
