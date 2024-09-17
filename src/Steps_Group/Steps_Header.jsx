import React from "react";
import logo from "../images/meetup_logo_mobile.png"
import "./Steps_Header.css"

const Steps_Header = () => {
    return(
        <div className="Steps_Header">
            <div className="SH_logo">
                <img src={logo} alt="logo" height="100%" width="100%" />
            </div>
            <div className="SH_SAE">Save and exit</div>
        </div>
    )
}

export default Steps_Header;