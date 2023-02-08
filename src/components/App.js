import logo from "../assets/logo.svg";
import "../styles/App.css";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import Nav from "./Nav.js";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      {/* PAGES */}
      <Route exact path="/" element={<Home />} />
      <Route path="/housing/:number" element={<Housing />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <header className="App-header">
        </header>
      </div>
    </>
  );
}

export default App;
