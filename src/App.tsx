import DunesPage from "./pages/dunes";
import HomePage from "./pages/home";
import BoatPage from "./pages/boat";
import IntertidalPage from "./pages/intertidal";
import MarineInvertPage from "./pages/marineInvert";
import OrgLabPage from "./pages/orgLab";
import MiscPage from "./pages/misc";

import { 
  BrowserRouter as Router, Routes, 
  Route, Link
} from "react-router-dom"; 

function App() {
  return (
    <div className="h-full">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} /> 
            <Route path="dunes" element={<DunesPage />} /> 
            <Route path="boat" element={<BoatPage />} /> 
            <Route path="intertidal" element={<IntertidalPage />} /> 
            <Route path="marineInvert" element={<MarineInvertPage />} /> 
            <Route path="orgLab" element={<OrgLabPage />} /> 
            <Route path="misc" element={<MiscPage />} /> 
          </Route>
        </Routes> 
      </Router>
    </div>
  )
}

export default App
