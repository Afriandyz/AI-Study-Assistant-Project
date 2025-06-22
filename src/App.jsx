import { Route, Routes, useLocation } from "react-router-dom";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const location = useLocation();

  const navbarPath = ["/login", "/register"];
  const showNavbar = !navbarPath.includes(location.pathname);

  return (
    <div>
      <div className="absolute w-full min-h-screen top-0 -z-20 bg-gradient-to-b from-blue-200 to-background blur-3xl"></div>
      {showNavbar && <Navbar />}
      {showNavbar && <Footer />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default App;
