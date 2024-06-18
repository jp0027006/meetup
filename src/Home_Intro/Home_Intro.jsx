import "./Home_Intro.css";
import home_intro_photo from "../images/home_intro.png";

function Home_Intro() {
  return (
    <div className="Home_Intro">
      <div className="Home_Intro_Sec_1">
        <h1>The people platform—Where interests become friendships</h1>
        <p className="mt-4">
          Whatever your interest, from hiking and reading to networking and
          skill sharing, there are thousands of people who share it on Meetup.
          Events are happening every day sign up to join the fun.
        </p>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal2"
          className="signup_btn btn join_btn mt-3"
        >
          {" "}
          Join Meetup{" "}
        </button>
      </div>
      <div className="Home_Intro_Sec_2">
        <img src={home_intro_photo} alt="photo_not_found" />
      </div>
    </div>
  );
}
export default Home_Intro;
