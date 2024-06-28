import "./Outdoors_and_travel.css";
import Footer from "../Footer/Footer";
import NavBar_LS from "../NavBar_LS/NavBar";
import NavBar_SS from "../NavBar_SS/NavBar";
import backpacking from "../images/Outdoors_and_travel/backpacking.webp";
import bicycling from "../images/Outdoors_and_travel/bicycling.webp";
import camping from "../images/Outdoors_and_travel/camping.webp";
import i_travel from "../images/Outdoors_and_travel/international-travel.webp";
import kayaking from "../images/Outdoors_and_travel/kayaking.webp";
import NavBar from "../NavBar/NavBar";

function Outdoors_and_travel() {
  return (
    <div className="Outdoors_and_travel">
      <NavBar_LS />
      <NavBar />

      <div className="Outdoors_and_travel_sec mt-5">
        <h1 className="heading">Outdoor Activities Groups and Events</h1>
        <p className="ms-4 me-4" style={{ color: "black" }}>
          Since 2002, Meetup has helped bring people together at events for
          shared interests and spark new friendships. Whether you like hiking
          and biking or kayaking and running, there are outdoor groups for your
          interests on Meetup. Join groups to find local activities and meet
          people who share your passion for the outdoors.
        </p>
        <button className="join_grp mt-4 mb-5">Join Groups</button>
      </div>

      <div>
        <div
          className="d-none d-md-flex justify-content-center px-3 px-md-5"
          style={{ columnGap: "0.7rem" }}
        >
          <div className="text-center mx-3 d-flex flex-column">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                alt="Hiking topic image"
                loading="lazy"
                width="242"
                height="372"
                className="mb-3 rounded"
                srcSet="https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/hiking.webp?w=256 1x, https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/hiking.webp?w=640 2x"
                src="https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/hiking.webp?w=640"
              />
            </a>
            <a
              href="#"
              className="event_title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Hiking ▶
            </a>
          </div>

          <div className="text-center mx-3 d-flex flex-column">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                alt="Outdoor Fitness topic image"
                loading="lazy"
                width="242"
                height="372"
                className="mb-3 rounded"
                srcSet="https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/running.webp?w=256 1x, https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/running.webp?w=640 2x"
                src="https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/running.webp?w=640"
              />
            </a>
            <a
              href="#"
              className="event_title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Outdoor Fitness ▶
            </a>
          </div>

          <div className="text-center mx-3 d-flex flex-column">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                alt="Weekend Adventure topic image"
                loading="lazy"
                width="242"
                height="372"
                className="mb-3 rounded"
                srcSet="https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/adventure.webp?w=256 1x, https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/adventure.webp?w=640 2x"
                src="https://secure.meetupstatic.com/next/images/landing-pages/outdoor-and-adventure/cta/adventure.webp?w=640"
              />
            </a>
            <a
              href="#"
              className="event_title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weekend Adventure ▶
            </a>
          </div>
        </div>
      </div>

      <div className="Outdoors_and_travel_sec mt-5">
        <h1 className="heading mb-5">Find and Make Friends</h1>
      </div>

      <div
        className="position-relative d-none d-xl-block min-h-650"
        style={{ height: "45rem", marginTop: "-16px" }}
      >
        <img
          alt="faces images in the bubbles"
          loading="lazy"
          height="418"
          decoding="async"
          srcSet="https://secure.meetupstatic.com/next/images/lp/faceBubbles.webp?w=1200 1x, https://secure.meetupstatic.com/next/images/lp/faceBubbles.webp?w=3840 2x"
          src="https://secure.meetupstatic.com/next/images/lp/faceBubbles.webp?w=3840"
          className="img-fluid"
        />
        <div className="position-absolute top-0 d-flex align-items-end w-100">
          <div className="container">
            <div className="row">
              <div className="left_sec">
                <h3 className="mb-2 text-3xl fw-bold">
                  Find outdoor activities near me
                </h3>
                <p className="mb-5">
                  Join groups for your interests, from hiking and biking to rock
                  climbing and kayaking. Make friends with people who like what
                  you like.
                </p>
                <a
                  className="join_grp2"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Groups
                </a>
              </div>
              <div className="col-xl-2 d-flex justify-content-center align-items-center video-container">
                <video autoplay loop className="custom-video">
                  <source
                    src="https://secure.meetupstatic.com/next/images/lp/phone.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="right_sec">
                <h3 className="mb-2 text-3xl fw-bold">
                  Go on an outdoor adventure
                </h3>
                <p className="mb-5">
                  Breathe in fresh air and explore new trails at an outdoor
                  event on Meetup. Find outdoor group activities and meet
                  like-minded locals.
                </p>
                <a
                  className="join_grp3"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discover adventure groups
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 mb-5" style={{ textAlign: "center" }}>
        <p className="heading2">
          Explore popular topics within travel and outdoor events
        </p>
      </div>
      <div className="mb-5">
        <div
          className="d-none d-md-flex justify-content-center px-3 px-md-5"
          style={{ columnGap: "0.7rem" }}
        >
          <div className="text-center mx-3 d-flex flex-column">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                alt="Camping image"
                loading="lazy"
                className="mb-3 rounded"
                src={camping}
              />
            </a>
            <a
              href="#"
              className="event_title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Camping ▶
            </a>
          </div>

          <div className="text-center mx-3 d-flex flex-column">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                alt="International Travel image"
                loading="lazy"
                className="mb-3 rounded"
                src={i_travel}
              />
            </a>
            <a
              href="#"
              className="event_title"
              target="_blank"
              rel="noopener noreferrer"
            >
              International Travel ▶
            </a>
          </div>

          <div className="text-center mx-3 d-flex flex-column">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                alt="Bicycling image"
                loading="lazy"
                className="mb-3 rounded"
                src={bicycling}
              />
            </a>
            <a
              href="#"
              className="event_title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bicycling ▶
            </a>
          </div>
        </div>

        <div
          className="d-none d-md-flex justify-content-center px-3 px-md-5 mt-5"
          style={{ columnGap: "0.7rem" }}
        >
          <div className="text-center mx-3 d-flex flex-column">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                alt="Backpacking image"
                loading="lazy"
                className="mb-3 rounded"
                src={backpacking}
              />
            </a>
            <a
              href="#"
              className="event_title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Backpacking ▶
            </a>
          </div>
          <div className="text-center mx-3 d-flex flex-column">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                alt="Kayaking image"
                loading="lazy"
                className="mb-3 rounded"
                src={kayaking}
              />
            </a>
            <a
              href="#"
              className="event_title"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kayaking ▶
            </a>
          </div>          
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Outdoors_and_travel;
