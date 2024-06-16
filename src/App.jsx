import "./App.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home_Page from "./Home_Page/Home_Page";
import EventDetail_Page from "./EventDetail_Page/EventDetail_Page";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/events-near/:id" element={<EventDetail_Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 