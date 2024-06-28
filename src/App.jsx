import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_Page from "./Home_Page/Home_Page";
import EventDetail_Page from "./EventDetail_Page/EventDetail_Page";
import See_all_events from "./See_all_events/See_all_events";
import ScrollToTop from './ScrollToTop';
import CitiesDetail_Page from './CitiesDetail_Page/CitiesDetail_Page'
import Friendships_Details from "./Friendships_Details/Friendships_Details";
import Outdoors_and_travel from "./Outdoors_and_travel/Outdoors_and_travel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/See_all_events" element={<See_all_events />} />
          <Route path="/events-near/:id" element={<EventDetail_Page />} />
          <Route path="/Cities/:id" element={<CitiesDetail_Page />} />
          <Route path="/Friendships/:id" element={<Friendships_Details />} />
          <Route
            path="/outdoors-and-travel"
            element={<Outdoors_and_travel />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
