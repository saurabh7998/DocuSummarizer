import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Login from "./pages/Login.jsx";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  useAuth,
} from "@clerk/clerk-react";

const ProtectedRoute = ({ element }) => {
  const { isSignedIn } = useAuth();
  return isSignedIn ? element : <Navigate to="/sign-in" replace />;
};

const App = () => {
  return (
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/dashboard"
            element={<ProtectedRoute element={<Dashboard />} />}
          />
          <Route path="/sign-in" element={<Login />} />
        </Routes>
      </Router>
    </ClerkProvider>
  );
};

export default App;
