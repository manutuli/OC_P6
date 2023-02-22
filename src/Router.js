import "./styles/index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";
import Nav from './components/Nav'
// 
function Router() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route path={"/housing/:id"} element={<Housing/>}/>
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}
// 
export default Router;
