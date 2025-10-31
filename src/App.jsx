import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import HomePage from "./pages/HomePage/Home";
import AboutPage from "./pages/About/About";
import WalletPage from "./pages/Wallet/Wallet";
import ProfilePage from "./pages/Profile/Profile";
import AuthPage from "./pages/AuthPage/AuthPage";
import ChatPage from "./pages/Chat/Chat";
import ContactPage from "./pages/Contact/ContactPage";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Route – Login/Register */}
          <Route path="/auth" element={<AuthPage />} />

          {/* Protected Routes – Require Login */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout />
              </PrivateRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="wallet" element={<WalletPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="chat" element={<ChatPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
