import React from "react";
import Steps_Header from "./Steps_Header";
import { Link } from "react-router-dom";

const Step2 = () => {
    return(
        <div className="Step2">
            <Steps_Header />
            <div className="Parent_line">
                <div className="Child_Line">
                </div>
            </div>
            <div className="steps_number">STEP 2 OF 6</div>
            <Link to={`/start-new-group/step3`}><button className="next_btn">Next</button></Link>
        </div>
    )
}

export default Step2;