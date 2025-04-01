import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Historia from "./pages/Historia";
import "./App.css";
import videoBg from "./assets/video.mp4";

// Verifica se estamos no ambiente de produção ou não
const baseUrl = process.env.NODE_ENV === "production" ? "/corinthians/" : "/";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Historia">History</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <Router basename={baseUrl}>
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
                <p>The History of the People's Team !</p>
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
