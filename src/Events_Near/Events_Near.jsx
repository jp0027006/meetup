import React from "react";
import "./Events_Near.css";
import edit_btn from "../images/edit_btn.png";
import { Link } from 'react-router-dom';
import DisplayData from "../HomeScreenLayout_ForDisplayData/DisplayData";
import Events_Near_Data from "../AppData.json";

function Events_Near() {
  return (
    <div className="Events_Near">
      <div className="event_header">
        <h2>
          Events near{" "}
          <button className="btn event_near_btn">
            Ahmedabad, IN{" "}
            <div className="event_near_btn_img">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="mt-2 edit injected-svg fill-current"
                data-src="https://secure.meetupstatic.com/next/images/design-system-icons/edit.svg"
                data-icon="icon-1"
              >
                <title>icon</title>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.728 3.41416C15.509 2.63311 16.7753 2.63311 17.5564 3.41416L18.9706 4.82837C19.7517 5.60942 19.7517 6.87575 18.9706 7.6568L17.5564 9.07101L13.3138 4.82837L14.728 3.41416ZM12.6066 5.53546L16.8492 9.7781L8.65685 17.9705C8.46931 18.158 8.21496 18.2634 7.94974 18.2634H4.62132C4.34517 18.2634 4.12132 18.0395 4.12132 17.7634L4.12132 14.435C4.12132 14.1697 4.22667 13.9154 4.41421 13.7279L12.6066 5.53546ZM4.75 19.4999C4.33579 19.4999 4 19.8357 4 20.2499C4 20.6642 4.33579 20.9999 4.75 20.9999H19.25C19.6642 20.9999 20 20.6642 20 20.2499C20 19.8357 19.6642 19.4999 19.25 19.4999H4.75Z"
                ></path>
              </svg>
            </div>
          </button>
        </h2>
        <Link to="/See_all_events" className="see_all_event_link">
          See all events
        </Link>
      </div>
      <div className="event_main_sec">
        {Events_Near_Data.NearEvent.map((event) => (
          <DisplayData key={event.id} event={event} />
        ))}
      </div>
      <Link to="/See_all_events" className="see_all_event_link_mobile">
          See all events
        </Link>
    </div>
  );
}

export default Events_Near;
