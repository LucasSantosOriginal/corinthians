import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Historia from "./pages/Historia";
import "./App.css";
import videoBg from "./assets/video.mp4";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Início</Link>
        </li>
        <li>
          <Link to="/Historia">Historia</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="main">
              <div className="overlay"></div>
              <video src={videoBg} autoPlay loop muted />
              <div className="titulo">
                <h1>CORINTHIANS</h1>
                <p>A história do time do povo</p>
              </div>
            </div>
          }
        />
        <Route path="/Historia" element={<Historia />} />
      </Routes>
    </Router>
  );
}

export default App;
