import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
import AboutPage from "./pages/About/About";
import WalletPage from "./pages/Wallet/Wallet";
import ProfilePage from "./pages/Profile/Profile";
import AuthPage from "./pages/AuthPage/AuthPage";
import ContactPage from "./pages/Contact/ContactPage";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* All pages that use the common Layout (Navbar + Footer) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="wallet" element={<WalletPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
