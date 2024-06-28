import "./Friendships.css";
import AppData from "../AppData.json"
import Friendships_Module from "./Friendships_Module";

function Friendships() {
  return (
    <div className="Friendships mt-5">
      <h2>Friendships are made on Meetup</h2>
      <p className="mt-3">
        Since 2002, members have used Meetup to make new friends, meet
        like-minded people, spend time on hobbies, and connect with locals over
        shared interests. Learn how.
      </p>
      <div className="frienship-main">
        {AppData.Friendships.map((F_details) => (
          <Friendships_Module key={F_details.id} details={F_details} />
        ))}
      </div>
    </div>
  );
}
export default Friendships;
