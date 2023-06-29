import { InitialSite } from "./features/InitialSite";
import { Home } from "./features/Home";
import { AboutWedding } from "./features/AboutWedding";
import { QAPage } from "./features/QAPage";
import { RSVP } from "./features/RSVP";
import {
  Routes,
  HashRouter,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/initialSite" element={<InitialSite />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutWedding" element={<AboutWedding />} />
        <Route path="/invitations" element={<RSVP />} />
        <Route path="/qa" element={<QAPage />} />
        {/* <Route path="/schedule" element={<AboutWedding />} />
        <Route path="/guestbook" element={<AboutWedding />} /> */}
        {/* <Route path="/photos" element={<AboutWedding />} /> */}
        <Route path="/" element={<Navigate to="/initialSite" />} />
        <Route path="*" element={<InitialSite />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
