import { InitialSite } from "./features/InitialSite";
import { Home } from "./features/Home";
import { Routes, HashRouter, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/initialSite" element={<InitialSite />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/initialSite" />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
