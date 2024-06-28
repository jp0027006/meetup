import React from "react";
import Steps_Header from "./Steps_Header";
import { Link } from "react-router-dom";

const Step4 = () => {
    return(
        <div className="Step4">
            <Steps_Header />
            <Link to={`/start-new-group/step5`}><button className="next_btn">Next</button></Link>
        </div>
    )
}

export default Step4;