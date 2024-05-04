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
            <Route path="dunes" element={<PageTemplate name={"Dunes"} description={`Barrier islands are islands that run parallel to the mainland and protect it. They form on passive continental margins and are made up of loose sediment. Barrier islands form either from spit formation and fragmentation, sand bar emergence, or dune ridge submergence. Assateague was formed from spit formation and fragmentation.\n\nA dune is a mound of sand formed by a natural erosional force. They are formed from wind blowing sand grains into a pile. They are an important habitat for animals and biodiversity. There are three different stages of dune formation: embryo, secondary, and mature dunes. We visited some dunes and identified each of the three different stages.\n\nWe also talked about primary and secondary succession, which is the transition in the species composition of a biological community, often following ecological disturbance. We simulated the types of succession by building our own dunes and kicking them over as disturbance.`} photosArr={dunePhotos}/>} /> 
            <Route path="boat" element={<PageTemplate name={"Boat"} description={"We took a boat ride into the Chincoteague bay to take measurements of water quality. We took samples of the water from different depths. We used scientific tools to measure the salinity, density, pH, dissolved oxygen, nitrates, and phosphates in the water samples. These measures of water quality data are important for living conditions of organisms.\n\nWe also trawled using a net to collect organisms. We were looking for dangerous creatures, fishes and squid, and other invertebrates. We ended up catching a baby seahorse and a funny-looking fish."} photosArr={boatPhotos}/>} /> 
            <Route path="intertidal" element={<PageTemplate name={"Intertidal"} description={"The intertidal zone is an area between high tide and low tide. It is known as the littoral zone. It is submerged with water at high tide and exposed at low tide. It has a wrack line, high oxygen levels, high light penetration, and high changes in temperature. The sublittoral zone is the area below high tide, and the supralittoral zone is the area above high tide.\n\nWe had the opportunity to go into the water in the intertidal zone and sift for organisms in mud samples. We also created a “Godzilla wall” to try to scare organisms into a net."} photosArr={intertidalPhotos}/>} /> 
            <Route path="marineInvert" element={<PageTemplate name={"Marine Invertebrates"} description={"An invertebrate is an organism that has no spine. Examples include sand dollars, shrimp, crabs, and scallops. Some invertebrates, like crabs, support themselves using an exoskeleton, and they have to molt to grow. Clams and snails use shells, which are hardened structures made of calcium carbonate. Sea stars and earthworms use hydrostatic pressure to support themselves.\n\nWe also talked about the phylogeny of invertebrates. Categories include Porifera, Cnidaria, Mollusca, Annelida, Arthopoda, and Echinodermata. We went out to the docks and used nets to collect invertebrates."} photosArr={marineInvertPhotos}/>} /> 
            <Route path="orgLab" element={<PageTemplate name={"Organism Lab"} description={"In the microorganism lab, we learned about plankton, which are aquatic organisms that cannot overcome current. Microplankton cannot be seen without a microscope (<20mm) and microplankton can be seen with the plain eye (2-20cm). Phytoplankton are plants, and zooplankton are animals. Holoplankton are plankton for their whole life, while meroplankton are plankton for part of their life. Plankton produce 50-80% of the world’s oxygen.\n\nIn the microorganism lab, we used a field book to identify the invertebrates we collected from Marine Invertebrates. An example we observed was a Garland Hydroid (Dynamena Pumila), which looks like tree branches."} photosArr={orgLabPhotos}/>} /> 
            <Route path="sunrise" element={<PageTemplate name={"Sunrise"} description={"We woke up at 4:45am to go see the sunrise on the beach. We then took a morning hike in a marsh to go bird watching. "} photosArr={sunrisePhotos}/>} /> 
            <Route path="misc" element={<PageTemplate name={"Miscellaneous"} description={"Water, sky, and ramen."} photosArr={miscPhotos}/>} /> 
          </Route>
        </Routes> 
      </Router>
    </div>
  )
}

export default App
