import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_Page from "./Home_Page/Home_Page";
import EventDetail_Page from "./EventDetail_Page/EventDetail_Page";
import See_all_events from "./See_all_events/See_all_events";
import ScrollToTop from './ScrollToTop';
import CitiesDetail_Page from './CitiesDetail_Page/CitiesDetail_Page'
import Friendships_Details from "./Friendships_Details/Friendships_Details";
import Outdoors_and_travel from "./Outdoors_and_travel/Outdoors_and_travel";
import Step1 from "./Steps_Group/Step1"
import Step2 from "./Steps_Group/Step2";
import Step3 from "./Steps_Group/Step3";
import Step4 from "./Steps_Group/Step4";
import Step5 from "./Steps_Group/Step5";
import Step6 from "./Steps_Group/Step6";

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
          <Route path="/start-new-group/step1" element={<Step1 />} />
          <Route path="/start-new-group/step2" element={<Step2 />} />
          <Route path="/start-new-group/step3" element={<Step3 />} />
          <Route path="/start-new-group/step4" element={<Step4 />} />
          <Route path="/start-new-group/step5" element={<Step5 />} />
          <Route path="/start-new-group/step6" element={<Step6 />} />
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
