import React, { useContext } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import SignupPage from "./pages/SignupPage";
import AuthContext from "./store/AuthContext";
import EnvironmentPage from "./pages/EnvironmentPage";

function App() {
  const authContext = useContext(AuthContext);
  return (
    <React.Fragment>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/login"
            element={authContext.isLoggedIn ? <HomePage /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={authContext.isLoggedIn ? <HomePage /> : <SignupPage />}
          />
          <Route path="/environment" element={<EnvironmentPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </React.Fragment>
  );
}

export default App;
