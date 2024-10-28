import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tracks from "./components/tracks/Tracks";
import Lyrics from "./components/tracks/Lyrics";
import Search from "./components/tracks/Search";

function App() {
  return (
    <>
      <NavBar />
      {/* <Tracks /> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search /> <Tracks />
            </>
          }
        />
        <Route path="/lyrics/track/:id" element={<Lyrics />} />
        <Route path="/" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
