import "./Cities.css";
import new_york from "../images/cities/new_york.webp";
import san_francisco from "../images/cities/san_francisco.webp";
import chicago from "../images/cities/chicago.webp";
import nashville from "../images/cities/nashville.webp";
import miami from "../images/cities/miami.webp";
import { Link } from 'react-router-dom';

function Cities() {
  return (
    <div className="Cities mt-5">
      <h2>Popular cities on Meetup</h2>
      <p className="mt-3">
        Looking for fun things to do near you? See what Meetup organizers are
        planning in cities around the country.
      </p>
      <div className="Cities-main">
        <Link to={`/Cities/New_York`}> 
            <a className="cities_sec text-center" href="#">
              <img className="city_img" src={new_york} alt="new_york" height="100%" width="100%" />
              <h3 className="country_name">New York</h3>
            </a>
        </Link>
        <Link to={`/Cities/New_York`}> 
            <a className="cities_sec text-center" href="#">
              <img className="city_img" src={san_francisco} alt="san_francisco"  height="100%" width="100%" />
              <h3 className="country_name">San Francisco</h3>
            </a>
        </Link>
        <Link to={`/Cities/New_York`}> 
            <a className="cities_sec text-center" href="#">
              <img className="city_img" src={chicago} alt="chicago" height="100%" width="100%"  />
              <h3 className="country_name">Chicago</h3>
            </a>
        </Link>
        <Link to={`/Cities/New_York`}> 
            <a className="cities_sec text-center" href="#">
              <img className="city_img" src={nashville} alt="nashville" height="100%" width="100%"  />
              <h3 className="country_name">Nashville</h3>
            </a>
        </Link>
        <Link to={`/Cities/New_York`}> 
            <a className="cities_sec text-center" href="#">
              <img className="city_img" src={miami} alt="miami" height="100%" width="100%"  />
              <h3 className="country_name">Miami</h3>
            </a>
        </Link>
      </div>
      <div className="mt-5">
  <h2>How Meetup works</h2>
  <div className="container mt-4">
    <div className="row">
      <a href="#" className="col col-12 col-md-6 mb-4">
        <div className="d-flex align-items-start">
          <div className="me-4">
            <img
              src="https://secure.meetupstatic.com/next/images/indexPage/how-it-works/search.svg?w=48"
              alt="search"
              className="img-fluid"
            />
          </div>
          <div>
            <h5 className="mb-3">Discover events and groups</h5>
            <p className="mb-3">
              See who's hosting local events for all the things you love
            </p>
            <span>Search events and groups</span>
          </div>
        </div>
      </a>
      <a href="#" className="col col-12 col-md-6 mb-2">
        <div className="d-flex align-items-start">
          <div className="me-3">
            <img
              src="https://secure.meetupstatic.com/next/images/indexPage/how-it-works/plus.svg?w=48"
              alt="start group"
              className="img-fluid"
            />
          </div>
          <div>
            <h5 className="mb-3">Start a group to host events</h5>
            <p className="mb-3">
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
