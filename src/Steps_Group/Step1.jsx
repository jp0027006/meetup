import React from "react";
import Steps_Header from "./Steps_Header";
import "./Steps_Files.css"
import search_icon from "../images/search_icon_gray.png";
import { Link } from "react-router-dom";

const Step1 = () => {
    return(
        <div className="Step1">
            <Steps_Header />
            <div className="Parent_line">
                <div className="Child_Line">
                </div>
            </div>
            <div className="steps_number">STEP 1 OF 6</div>

            <div className="content_container">
                <div className="content_container_part1">
                     <h2>First, set your location for your group</h2>
                    <div className="parent_Search_step1">
                        <div className="parent_Search_step1_icon">
                            <img src={search_icon} alt="" height="100%" />
                        </div>
                        <input type="text" placeholder="Ahmedabad, IN" className="parent_Search_step1_field" />
                    </div>
                    <Link to={`/start-new-group/step2`}><button className="next_btn">Next</button></Link>
                </div>
                <div className="content_container_part2">
                    <div className="tip_sec">
                        <div className="tip_sec_title"><b>Tip</b></div>
                        <div className="tip_sec_info">Meetup groups meet locally, in person or online. The location helps us to connect with people in your area.</div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Step1;