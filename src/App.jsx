import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import ClerkAuth from "./components/ClerkAuth.jsx";

const App = () => {
  return (
    <Router>
      <ClerkAuth>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </ClerkAuth>
    </Router>
  );
};

export default App;
