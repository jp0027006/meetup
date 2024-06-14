import "./Cities.css";
import new_york from "../images/cities/new_york.webp";
import san_francisco from "../images/cities/san_francisco.webp";
import chicago from "../images/cities/chicago.webp";
import nashville from "../images/cities/nashville.webp";
import miami from "../images/cities/miami.webp";

function Cities() {
  return (
    <div className="Cities mt-5">
      <h2>Popular cities on Meetup</h2>
      <p className="mt-3">
        Looking for fun things to do near you? See what Meetup organizers are
        planning in cities around the country.
      </p>
      <div className="Cities-main d-flex">
        <a className="cities_sec text-center" href="#">
          <img className="city_img" src={new_york} alt="new_york" />
          <h3 className="mt-3">New York</h3>
        </a>
        <a className="cities_sec text-center" href="#">
          <img className="city_img" src={san_francisco} alt="san_francisco" />
          <h3 className="mt-3">San Francisco</h3>
        </a>
        <a className="cities_sec text-center" href="#">
          <img className="city_img" src={chicago} alt="chicago" />
          <h3 className="mt-3">Chicago</h3>
        </a>
        <a className="cities_sec text-center" href="#">
          <img className="city_img" src={nashville} alt="nashville" />
          <h3 className="mt-3">Nashville</h3>
        </a>
        <a className="cities_sec text-center" href="#">
          <img className="city_img" src={miami} alt="miami" />
          <h3 className="mt-3">Miami</h3>
        </a>
      </div>
      <div className="mt-5">
        <h2>How Meetup works</h2>
        <div className="container mt-4">
          <div className="row">
            <a href="#" className="col">
              <div className="row" href="#">
                <div className="col-2">
                  <img
                    src="https://secure.meetupstatic.com/next/images/indexPage/how-it-works/search.svg?w=48"
                    alt="search"
                  />
                </div>
                <div className="detail">
                  <h5 className="mb-2">Discover events and groups</h5>
                  <p className="mb-1">
                    See who's hosting local events for all the things you love
                  </p>
                  <span>Search events and groups</span>
                </div>
              </div>
            </a>
            <a href="#" className="col">
              <div className="row" href="#">
                <div className="col-2">
                  <img
                    src="https://secure.meetupstatic.com/next/images/indexPage/how-it-works/plus.svg?w=48"
                    alt="search"
                  />
                </div>
                <div className="detail">
                  <h5 className="mb-2">Start a group to host events</h5>
                  <p className="mb-1">
                    Create your own Meetup group, and draw from a community of
                    millions
                  </p>
                  <span>Start a group</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cities;
