import React, { useState } from "react";
import {
  AuthContainer,
  AuthLogo,
  AuthCard,
  AuthTabs,
  AuthForm,
  InputGroup,
  ExtraOptions,
  LoginButton,
  SocialLogin,
  SwitchText,
} from "./AuthStyles";
import {
  FaUser,
  FaLock,
  FaEnvelope,
  FaGoogle,
  FaLinkedin,
} from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "../../assets/drishti-logo.png";

// ✅ Firebase imports
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("login");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Email Auth
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (activeTab === "login") {
        if (!formData.email || !formData.password) {
          toast.error("Please enter email & password!");
          return;
        }

        await signInWithEmailAndPassword(auth, formData.email, formData.password);
        toast.success("Login successful! 🎉");
        navigate("/");
      } else {
        if (!formData.email || !formData.password) {
          toast.error("Please fill all fields!");
          return;
        }

        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        toast.success("Account created successfully! 🚀");
        setActiveTab("login");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // ✅ Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      toast.success("Logged in with Google ✅");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <AuthContainer>
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Logo */}
      <AuthLogo>
        <img src={logo} alt="Drishti Logo" />
      </AuthLogo>

      <AuthCard>
        {/* Tabs */}
        <AuthTabs>
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            LOGIN
          </button>
          <button
            className={activeTab === "register" ? "active" : ""}
            onClick={() => setActiveTab("register")}
          >
            REGISTER
          </button>
        </AuthTabs>

        {/* Login Form */}
        {activeTab === "login" && (
          <AuthForm onSubmit={handleSubmit}>
            <InputGroup>
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <ExtraOptions>
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#">Forgot Password?</a>
            </ExtraOptions>

            <LoginButton type="submit">LOG IN</LoginButton>

            <SocialLogin>
              <FaGoogle className="google" onClick={handleGoogleLogin} />
              <FaLinkedin
                className="linkedin"
                onClick={() =>
                  toast.info("LinkedIn login requires backend OAuth setup.")
                }
              />
            </SocialLogin>

            <SwitchText>
              Don’t have an account?{" "}
              <a onClick={() => setActiveTab("register")}>Register now</a>
            </SwitchText>
          </AuthForm>
        )}

        {/* Register Form */}
        {activeTab === "register" && (
          <AuthForm onSubmit={handleSubmit}>
            <InputGroup>
              <FaUser className="icon" />
              <input
                type="text"
                name="username"
                placeholder="Full Name"
                value={formData.username}
                onChange={handleChange}
              />
            </InputGroup>

            <InputGroup>
              <FaEnvelope className="icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <InputGroup>
              <FaLock className="icon" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </InputGroup>

            <LoginButton type="submit">REGISTER</LoginButton>

            <SocialLogin>
              <FaGoogle className="google" onClick={handleGoogleLogin} />
              <FaLinkedin
                className="linkedin"
                onClick={() =>
                  toast.info("LinkedIn login requires backend OAuth setup.")
                }
              />
            </SocialLogin>

            <SwitchText>
              Already have an account?{" "}
              <a onClick={() => setActiveTab("login")}>Login now</a>
            </SwitchText>
          </AuthForm>
        )}
      </AuthCard>
    </AuthContainer>
  );
};

export default AuthPage;
