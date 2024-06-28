import React from "react";
import Steps_Header from "./Steps_Header";
import { Link } from "react-router-dom";

const Step2 = () => {
    return(
        <div className="Step2">
            <Steps_Header />
            <Link to={`/start-new-group/step3`}><button className="next_btn">Next</button></Link>
        </div>
    )
}

export default Step2;