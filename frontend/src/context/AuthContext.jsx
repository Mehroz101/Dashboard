import { createContext, useContext, useState } from "react";
const API_URL = "http://localhost:5000";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const login = (token) => {
    localStorage.setItem("admintoken", token);
  };
  const logout = () => {
    localStorage.removeItem("admintoken");
  };
  const checkuser = () => {
    return localStorage.getItem("admintoken") ? true : false;
  };

  const value = { login, logout, checkuser }; // Return checkuser
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
