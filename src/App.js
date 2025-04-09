import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Alerts from "./pages/Alerts";
import Emergency from "./pages/Emergency";
import FirstAid from "./pages/FirstAid";
import Contact from "./pages/Contact";
import Login from "./pages/Login"; // Import the Login page

function App() {
  return (
    <Router>
      <Routes>
        {/* The root route should render the Login page */}
        <Route path="/" element={<Login />} /> {/* Login Page at / */}
        <Route path="/home" element={<Home />} /> {/* Home Page at /home */}
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/first-aid" element={<FirstAid />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
