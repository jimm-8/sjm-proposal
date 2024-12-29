import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import SplashScreen from "./pages/SplashScreen";
import Loader from "./pages/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 5000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <BrowserRouter>
      {loading && <Loader />} {/* Show Loader component during loading */}
      <Routes>
        <Route path="/" element={<Navigate to="/sjm" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/sjm" element={<SplashScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
