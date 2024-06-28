import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_Page from "./Home_Page/Home_Page";
import EventDetail_Page from "./EventDetail_Page/EventDetail_Page";
import See_all_events from "./See_all_events/See_all_events";
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
