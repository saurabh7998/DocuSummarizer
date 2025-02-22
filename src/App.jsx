import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import ClerkAuth from "./components/ClerkAuth.jsx";
import { useAuth } from "@clerk/clerk-react";


const ProtectedRoute = ({ element }) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? element : <Navigate to="/sign-in" replace />;
};

const App = () => {
  return (
    <Router>
      <ClerkAuth>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </ClerkAuth>
    </Router>
  );
};

export default App;
