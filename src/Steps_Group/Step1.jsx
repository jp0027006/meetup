import React from "react";
import Steps_Header from "./Steps_Header";
import "./Steps_Files.css"
import { Link } from "react-router-dom";

const Step1 = () => {
    return(
        <div className="Step1">
            <Steps_Header />
            <Link to={`/start-new-group/step2`}><button className="next_btn">Next</button></Link>
        </div>
    )
}

export default Step1;