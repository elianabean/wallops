import background from '../assets/background.jpg'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import DunesPage from "./dunes";
import peaks from '../assets/peaks.png';
import { 
  BrowserRouter as Router, Routes, 
  Route, Link
} from "react-router-dom"; 

function HomePage() {
  return (
    <div className="h-full">
      <div className="overflow-x-hidden h-[100vh] w-[100vw] relative"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}>
        <NavBar></NavBar>
        <div className="h-[100vh] flex flex-col justify-center text-white text-center">
          <h2 className="text-8xl font-openSans font-extrabold mb-6">Wallops Island</h2>
          <h6 className="text-2xl font-ptSans">MBHS Class of 2026</h6>
        </div>
      </div>

      <div className="h-full flex flex-col justify-center px-20 mt-10">
        <h1 className="w-full text-center font-bold font-openSans mb-10 text-3xl">Activities</h1>
        <div className="flex flex-col justify-between space-y-8">
          <div className="w-full flex flex-row justify-around">
              <div className="">
                <Link to="/dunes"><img src={peaks} className="w-[36rem] h-[32rem]"></img></Link>
                <p className="font-ptSans w-full text-center mt-3 text-base">Dunes</p>
              </div>
              <div>
                <img src={peaks} className="w-[36rem] h-[32rem]"></img>
                <p className="font-ptSans w-full text-center mt-3 text-base">Boat</p>
              </div>
          </div>

          <div className="w-full flex flex-row justify-around">
            <div className="">
              <img src={peaks} className="w-[36rem] h-[32rem]"></img>
              <p className="font-ptSans w-full text-center mt-3 text-base">Intertidal</p>
            </div>
            <div>
              <img src={peaks} className="w-[36rem] h-[32rem]"></img>
              <p className="font-ptSans w-full text-center mt-3 text-base">Marine Invertebrates</p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-around">
            <div className="">
              <img src={peaks} className="w-[36rem] h-[32rem]"></img>
              <p className="font-ptSans w-full text-center mt-3 text-base">Organism Lab</p>
            </div>
            <div>
              <img src={peaks} className="w-[36rem] h-[32rem]"></img>
              <p className="font-ptSans w-full text-center mt-3 text-base">Misc</p>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default HomePage
