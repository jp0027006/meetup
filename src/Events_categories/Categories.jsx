import "./Categories.css";

function Categories() {
  return (
    <div className="Categories mt-5">
      <h2>Explore top categories</h2>
      <div className="Categories-main">
        <a className="category_sec" href="#">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/categories/travel_and_outdoor.svg?w=32"
            alt=""
          />
          <p>Travel and Outdoor</p>
        </a>
        <a className="category_sec" href="#">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/categories/social_activities.svg?w=32"
            alt=""
          />
          <p>Social Activity</p>
        </a>
        <a className="category_sec" href="#">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/categories/hobbies_and_passions.svg?w=32"
            alt=""
          />
          <p>Hobbies and Passion</p>
        </a>
        <a className="category_sec" href="#">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/categories/sports_and_fitness.svg?w=32"
            alt=""
          />
          <p>Sports and Fitness</p>
        </a>
        <a className="category_sec" href="#">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/categories/health_and_wellness.svg?w=32"
            alt=""
          />
          <p>Health and Wellbeing</p>
        </a>
        <a className="category_sec" href="#">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/categories/technology.svg?w=32"
            alt=""
          />
          <p>Technology</p>
        </a>
        <a className="category_sec" href="#">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/categories/art_and_culture.svg?w=32"
            alt=""
          />
          <p>Art and Culture</p>
        </a>
        <a className="category_sec" href="#">
          <img
            src="https://secure.meetupstatic.com/next/images/indexPage/categories/games.svg?w=32"
            alt=""
          />
          <p>Games</p>
        </a>
      </div>
    </div>
  );
}
export default Categories;
