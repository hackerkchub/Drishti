import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  GithubAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebaseConfig";

// ✅ Initialize auth once
const auth = getAuth(app);

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // 🔹 Track user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // 🔹 Email/password auth
  const signup = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const login = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const logout = () => signOut(auth);

  // 🔹 Social logins
  const googleLogin = () => signInWithPopup(auth, new GoogleAuthProvider());
  const facebookLogin = () => signInWithPopup(auth, new FacebookAuthProvider());
  const twitterLogin = () => signInWithPopup(auth, new TwitterAuthProvider());
  const githubLogin = () => signInWithPopup(auth, new GithubAuthProvider());

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        signup,
        login,
        logout,
        googleLogin,
        facebookLogin,
        twitterLogin,
        githubLogin,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
