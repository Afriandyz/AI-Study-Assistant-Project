import { Route, Routes, useLocation } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import "./App.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import AppLayout from "./pages/AppLayout";
import Dashboard from "./pages/protected_pages/Dashboard";
import Flashcard from "./pages/protected_pages/Flashcard";

const App = () => {
  const location = useLocation();

  const navbarPath = ["/login", "/register", "/app/dashboard", "/app/flashcard"];
  const showNavbar = !navbarPath.includes(location.pathname);

  return (
    <div>
      <div className="absolute w-full min-h-screen top-0 -z-20 bg-gradient-to-b from-blue-200 to-background blur-3xl"></div>
      {showNavbar && <Navbar />}
      {showNavbar && <Footer />}
      <Routes>
        {/* public routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* protected routes */}
        <Route path="/app" element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<Dashboard />}  />
          <Route path="flashcard" element={<Flashcard />}  />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
