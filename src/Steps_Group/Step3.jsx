import React from "react";
import Steps_Header from "./Steps_Header";
import { Link } from "react-router-dom";

const Step3 = () => {
    return(
        <div className="Step3">
            <Steps_Header />
            <div className="Parent_line">
                <div className="Child_Line">
                </div>
            </div>
            <div className="steps_number">STEP 3 OF 6</div>
            <Link to={`/start-new-group/step4`}><button className="next_btn">Next</button></Link>
        </div>
    )
}

export default Step3;