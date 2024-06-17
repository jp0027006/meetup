import React from "react";
import "./JoinMeetUp_Signup.css";
import join_meetup from "../images/join_meetup_.png";

function JoinMeetUp_Signup() {
  return (
    <div className="JoinMeetUp_Signup">
      <div className="JoinMeetUp_Signup_part1">
        <h3>Join Meetup</h3>
        <p>
          People use Meetup to meet new people, learn new things, find support,
          get out of their comfort zones, and pursue their passions, together.
          Membership is free.
        </p>
        <button
          className="Signup_btn"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
        >
          Sign up
        </button>
      </div>
      <div className="JoinMeetUp_Signup_part2">
        <img
          src={join_meetup}
          alt="join_meetup photo"
          height="100%"
          width="100%"
        />
      </div>
    </div>
  );
}

export default JoinMeetUp_Signup;
