import "./App.css";
import NavBar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Tracks from "./components/tracks/Tracks";

function App() {
  return (
    <>
      <NavBar />
      <Tracks />
    </>
  );
}

export default App;
