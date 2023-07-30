import { InitialSite } from "./features/InitialSite";
import { AboutWedding } from "./features/AboutWedding";
import { QAPage } from "./features/QAPage";
import { RSVP } from "./features/RSVP";
import { Schedule } from "./features/Schedule";
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
        <Route path="/aboutWedding" element={<AboutWedding />} />
        <Route path="/invitations" element={<RSVP />} />
        <Route path="/qa" element={<QAPage />} />
        <Route path="/schedule" element={<Schedule />} />
        {/* <Route path="/guestbook" element={<AboutWedding />} /> */}
        {/* <Route path="/photos" element={<AboutWedding />} /> */}
        <Route path="/" element={<Navigate to="/initialSite" />} />
        <Route path="*" element={<InitialSite />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
