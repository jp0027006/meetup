import React from "react";
import Steps_Header from "./Steps_Header";
import { Link } from "react-router-dom";

const Step4 = () => {
    return(
        <div className="Step4">
            <Steps_Header />
            <div className="Parent_line">
                <div className="Child_Line">
                </div>
            </div>
            <div className="steps_number">STEP 4 OF 6</div>
            <Link to={`/start-new-group/step5`}><button className="next_btn">Next</button></Link>
        </div>
    )
}

export default Step4;