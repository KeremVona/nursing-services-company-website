import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import Careers from "./pages/Careers";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/nursing-services-company-website" element={<Home />} />
          <Route
            path="/nursing-services-company-website/about-us"
            element={<AboutUs />}
          />
          <Route
            path="/nursing-services-company-website/services"
            element={<ServicesPage />}
          />
          <Route
            path="/nursing-services-company-website/contact"
            element={<ContactPage />}
          />
          <Route
            path="/nursing-services-company-website/careers"
            element={<Careers />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
