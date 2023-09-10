import { InitialSite } from "./features/InitialSite";
import { AboutWedding } from "./features/AboutWedding";
import { QAPage } from "./features/QAPage";
import { RSVP } from "./features/RSVP";
import { Schedule } from "./features/Schedule";
import { LoginPage } from "./features/LoginPage";
import {
  Routes,
  HashRouter,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { useState, createContext } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const correctUsername = process.env.REACT_APP_USERNAME;
  const correctPassword = process.env.REACT_APP_PASSWORD;

  const handleLogin = (username, password) => {
    if (username === correctUsername && password === correctPassword) {
      setLoggedIn(true);
    } else {
      alert("Niepoprawny login lub hasło!");
    }
  };

  return (
    <HashRouter>
      <ScrollToTop />
      <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
        <Routes>
          {!isLoggedIn && (
            <>
              <Route
                path="/loginSite"
                element={<LoginPage handleLogin={handleLogin} />}
              />
            </>
          )}
          {isLoggedIn && (
            <>
              <Route path="/initialSite" element={<InitialSite />} />
              <Route path="/aboutWedding" element={<AboutWedding />} />
              <Route path="/invitations" element={<RSVP />} />
              <Route path="/qa" element={<QAPage />} />
              <Route path="/schedule" element={<Schedule />} />
              {/* <Route path="/guestbook" element={<AboutWedding />} /> */}
              {/* <Route path="/photos" element={<AboutWedding />} /> */}
            </>
          )}
          <Route
            path="/"
            element={
              isLoggedIn ? <InitialSite /> : <Navigate to="/loginSite" />
            }
          />
          <Route
            path="*"
            element={
              isLoggedIn ? (
                <InitialSite />
              ) : (
                <LoginPage handleLogin={handleLogin} />
              )
            }
          />
        </Routes>
      </AuthContext.Provider>
    </HashRouter>
  );
}

export default App;
