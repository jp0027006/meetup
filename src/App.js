import "./App.css";
import NavBar from "./NavBar/NavBar";
import Home_Into from "./Home_Intro/Home_Intro";
import Events_Near from "./Events_Near/Events_Near";
import Categories from "./Events_categories/Categories";
import Cities from "./Cities/Cities";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="parent_component">
        <Home_Into />
        <Events_Near />
        <Categories />
        <Cities />
      </div>
    </div>
  );
}

export default App;
