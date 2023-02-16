import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Components/Login/LoginForm";

const AuthContext = React.createContext();

const App = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );

  useEffect(() => {
    const token = localStorage.getItem("authenticated");
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
      <Router>
        <Routes>
          <Route exact path="/login">
            {authenticated ? <Navigate to="/" /> : <LoginPage />}
          </Route>
          <Route path="/">
            {authenticated ? <h1>Welcome!</h1> : <Navigate to="/login" />}
          </Route>
        </Routes>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;


