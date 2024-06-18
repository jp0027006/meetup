import React from 'react';
import NavBar from '../NavBar/NavBar'
import './See_all_events.css'
import Footer from '../Footer/Footer'
import AppData from '../AppData.json'
import See_all_event_display_data from '../See_all_events_display_data/See_all_event_display_data';
import open_map from '../images/open_map.png'

function See_all_events() {
  return (
    <div className="See_all_events">
      <NavBar />
      <div className="See_all_events_body">
        <div className="See_all_events_sub">
            <h3>Events near Ahmedabad, IN</h3>
            <div className="link_Events_Groups">
                <a href='#' className='Events_link'>Events</a>
                <a href='#' className='Groups_link'>Groups</a>
            </div>
            <div className="dropdown_section">
                <div class="custom_select  custom_select_1">
                    <select name="day" id="day" className='day_dropdown'>
                        <option value="Any day">Any day</option>
                        <option value="Starting soon">Starting soon</option>
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This week">This week</option>
                        <option value="This weekend">This weekend</option>
                        <option value="Next week">Next week</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <div class="custom_select  custom_select_1">
                    <select name="day" id="day" className='event_type'>
                        <option value="Any type">Any type</option>
                        <option value="Online">Online</option>
                        <option value="Today">In person</option>
                    </select>
                </div>
                <div class="custom_select custom_select_2">
                    <select name="day" id="day" className='location_distance'>
                        <option value="Any distance">Any distance</option>
                        <option value="2m">2 miles</option>
                        <option value="5m">5 miles</option>
                        <option value="10m">10 miles</option>
                        <option value="25m">25 miles</option>
                        <option value="50m">50 miles</option>
                        <option value="100m">100 miles</option>
                    </select>
                </div>
                <div class="custom_select custom_select_2">
                    <select name="event_category" id="event_category" className='event_category'>
                        <option value="Any category">Any category</option>
                        <option value="New Groups">New Groups</option>
                        <option value="Art & Culture">Art & Culture</option>
                        <option value="Carrer & Environment">Carrer & Environment</option>
                        <option value="Dancing">Dancing</option>
                        <option value="Games">Games</option>
                        <option value="Health & Welbeing">Health & Welbeing</option>
                        <option value="Hobbies & Passions">Hobbies & Passions</option>
                        <option value="Identity & Language">Identity & Language</option>
                        <option value="Movement & Politics">Movement & Politics</option>
                        <option value="Music">Music</option>
                        <option value="Parents & Family">Parents & Family</option>
                        <option value="Pets & Animals">Pets & Animals</option>
                        <option value="Religion & Spirituality">Religion & Spirituality</option>
                        <option value="Science & Education">Science & Education</option>
                        <option value="Social Activities">Social Activities</option>
                        <option value="Sports & Fitness">Sports & Fitness</option>
                        <option value="Support & Coaching">Support & Coaching</option>
                        <option value="Technology">Technology</option>
                        <option value="Travel & Outdoor">Travel & Outdoor</option>
                        <option value="Writting">Writting</option>
                    </select>
                </div>
                <div class="custom_select custom_select_3">
                    <select name="sort_value" id="sort_value" className='sort_value'>
                        <option value="Date">Sort by: Date</option>
                        <option value="Relevance">Sort by: Relevance</option>
                    </select>
                </div>
            </div>

            <div className="See_all_event_section">

                <div className="event_render_section">

                    <div className="see_all_events_render">
                        {AppData.NearEvent.map((event) => (
                            <See_all_event_display_data key={event.id} event={event} />
                        ))}
                    </div>

                    <div className="Start_a_group">
                        <div className="Start_a_group_title">Become an organizer</div>
                        <div className="Start_a_group_data">
                            <div className="Start_a_group_data_text">Starting a Meetup group connects you with passionate people looking to share experiences in real life.</div>
                            <button className='share_btn_see_all'>Start a group</button>
                        </div>
                    </div>
                </div>

                <div className="see_all_events_location">
                    <div>Find events near</div>
                    <h4>Ahmedabad, IN</h4>
                    <div className="map_sec">
                        <button className='browsmap_btn'>Browse in map </button>
                    </div>
                </div>

            </div>

        </div>
      </div>
      <Footer className="footer_style_all_events"/>
    </div>
  );
}

export default See_all_events;
