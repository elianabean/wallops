import background from './assets/background.jpg'
import NavBar from "./components/NavBar";
import DunesPage from "./pages/dunes";
import peaks from './assets/peaks.png';
import HomePage from "./pages/home";

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
          </Route>
        </Routes> 
      </Router>
    </div>
  )
}

export default App
