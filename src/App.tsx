import HomePage from "./pages/home";
import ScrollToTop from "./components/scrollToTop";

import PageTemplate from "./components/pageTemplate";
import boatPhotos from './components/boatPhotos';
import dunePhotos from './components/dunePhotos';
import intertidalPhotos from './components/intertidalPhotos';
import marineInvertPhotos from './components/marineInvertPhotos';
import orgLabPhotos from './components/orgLabPhotos';
import sunrisePhotos from './components/sunrisePhotos';
import miscPhotos from './components/miscPhotos';


import { 
  BrowserRouter as Router, Routes, 
  Route, Link
} from "react-router-dom"; 

function App() {
  return (
    <div className="h-full">
      <Router>
        <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} /> 
            <Route path="dunes" element={<PageTemplate name={"Dunes"} description={"Description"} photosArr={dunePhotos}/>} /> 
            <Route path="boat" element={<PageTemplate name={"Boat"} description={"Description"} photosArr={boatPhotos}/>} /> 
            <Route path="intertidal" element={<PageTemplate name={"Intertidal"} description={"Description"} photosArr={intertidalPhotos}/>} /> 
            <Route path="marineInvert" element={<PageTemplate name={"Marine Invertebrates"} description={"Description"} photosArr={marineInvertPhotos}/>} /> 
            <Route path="orgLab" element={<PageTemplate name={"Organism Lab"} description={"Description"} photosArr={orgLabPhotos}/>} /> 
            <Route path="sunrise" element={<PageTemplate name={"Sunrise"} description={"Description"} photosArr={sunrisePhotos}/>} /> 
            <Route path="misc" element={<PageTemplate name={"Miscellaneous"} description={"Description"} photosArr={miscPhotos}/>} /> 
          </Route>
        </Routes> 
      </Router>
    </div>
  )
}

export default App
