import React from "react";
import Steps_Header from "./Steps_Header";
import { Link } from "react-router-dom";

const Step5 = () => {
    return(
        <div className="Step5">
            <Steps_Header />
            <div className="Parent_line">
                <div className="Child_Line">
                </div>
            </div>
            <div className="steps_number">STEP 5 OF 6</div>
            <Link to={`/start-new-group/step6`}><button className="next_btn">Next</button></Link>
        </div>
    )
}

export default Step5;