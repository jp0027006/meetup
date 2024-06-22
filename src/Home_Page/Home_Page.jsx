import "../App.css";
import NavBar_LS from '../NavBar_LS/NavBar'
import NavBar_SS from '../NavBar_SS/NavBar'
import Home_Into from "../Home_Intro/Home_Intro";
import Events_Near from "../Events_Near/Events_Near";
import UpcomingOnlineEvents from "../UpcomingEvents/UpcomingOnlineEvents";
import JoinMeetUp_Signup from "../JoinMeetUp_Signup/JoinMeetUp_Signup";
import Categories from "../Events_categories/Categories";
import Cities from "../Cities/Cities";
import Friendships from "../Friendships/Friendships";
import Footer from "../Footer/Footer";

function Home_Page() {
  return (
    <div className="Home_Page">
      <div className="navbar_LS">
        <NavBar_LS />        
      </div>
      <div className="navbar_SS">
        <NavBar_SS />        
      </div>
      <div className="parent_component">
        <Home_Into />
        <Events_Near />
        <UpcomingOnlineEvents />
        <JoinMeetUp_Signup />
        <Categories />
        <Cities />
        <Friendships />
      </div>
      <Footer /> 
    </div>
  );
}

export default Home_Page;
