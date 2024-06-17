import React from 'react';
import NavBar from '../NavBar/NavBar'
import './See_all_events.css'

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
                    <select name="day" id="day" className='day_dropdown'>
                        <option value="Any day">Any type</option>
                        <option value="Starting soon">Starting soon</option>
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This week">This week</option>
                        <option value="This weekend">This weekend</option>
                        <option value="Next week">Next week</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <div class="custom_select custom_select_2">
                    <select name="day" id="day" className='day_dropdown'>
                        <option value="Any day">Any distance</option>
                        <option value="Starting soon">Starting soon</option>
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This week">This week</option>
                        <option value="This weekend">This weekend</option>
                        <option value="Next week">Next week</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <div class="custom_select custom_select_2">
                    <select name="day" id="day" className='day_dropdown'>
                        <option value="Any day">Any category</option>
                        <option value="Starting soon">Starting soon</option>
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This week">This week</option>
                        <option value="This weekend">This weekend</option>
                        <option value="Next week">Next week</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <div class="custom_select custom_select_3">
                    <select name="day" id="day" className='day_dropdown'>
                        <option value="Any day">Sort by: Relevance</option>
                        <option value="Starting soon">Starting soon</option>
                        <option value="Today">Today</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="This week">This week</option>
                        <option value="This weekend">This weekend</option>
                        <option value="Next week">Next week</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default See_all_events;
