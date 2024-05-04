import background from '../assets/background.jpg'
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { 
  BrowserRouter as Router, Routes, 
  Route, Link
} from "react-router-dom"; 
import gsap from 'gsap';
import {useEffect, useRef, useState} from "react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AOS from 'aos';
import 'aos/dist/aos.css';
import dunes from "../assets/dunes/dunes1.jpeg";
import boat from "../assets/boat/boat7.jpeg";
import intertidal from "../assets/intertidal/intertidal2.jpeg";
import marineInvert from "../assets/marineInvert/marineInvert1.jpeg";
import orgLab from "../assets/orgLab/orgLab2.jpeg";
import sunrise from "../assets/sunrise/sunrise1.jpeg";
import misc from "../assets/miscFolder/misc1.jpeg";

import '../parallaxStyles.css';

{/*Cloud images from https://drive.google.com/drive/folders/1jFyS9H1XUmXpZUGMQLuKI8xXANkkR4D_ */}
import cloud1 from "../assets/cloud1.png";
import cloud2 from "../assets/cloud2.png";
import cloud3 from "../assets/cloud3.png";
import cloud4 from "../assets/cloud4.png";
import cloud5 from "../assets/cloud5.png";

{/* Parallax code from https://github.com/IvanSmiths/tutorial-next-gsap-parallax*/}
function HomePage() {
  const [setBackground] = useState(20)

  const parallaxRef = useRef(null);
  const cloud1Ref = useRef(null);
  const cloud2Ref = useRef(null);
  const cloud3Ref = useRef(null);
  const cloud4Ref = useRef(null);
  const cloud5Ref = useRef(null);

  
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
    
    let ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: parallaxRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
        },
        });

        tl.to(
          cloud1Ref.current,
          {
              x: "+=400",
          },
          0
        );
        tl.to(
          cloud2Ref.current,
          {
              x: "+=600",
          },
          0
        );
        tl.to(
          cloud3Ref.current,
          {
              x: "-=300",
          },
          0
        );
        
    });

    return () => ctx.revert();
}, []);

  return (
    <div className="h-full">
        
        <div className="parallax-outer" >
          <div ref={parallaxRef} className="parallax" style={{ 
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          }}>
            <NavBar></NavBar>
            <div className="clouds">
              <img ref={cloud1Ref} className="cloud1 absolute" src={cloud1} ></img>
              <img ref={cloud2Ref} className="cloud2 absolute" src={cloud2}></img>
              <img ref={cloud3Ref} className="cloud3 absolute" src={cloud3}></img>
              <img ref={cloud4Ref} className="cloud4 absolute" src={cloud4}></img>
              <img ref={cloud5Ref} className="cloud5 absolute" src={cloud5}></img>
            </div>
            <div className="h-[100vh] flex flex-col justify-center text-white text-center fixed top-0 w-full">
          <h2 className="text-8xl font-openSans font-extrabold mb-6">Wallops Island</h2>
          <h6 className="text-2xl font-ptSans">MBHS Class of 2026</h6>
        </div>
          </div>
        </div>

      <div className="h-full flex flex-col justify-center px-20 mt-10">
        <h1 className="w-full text-center font-bold font-openSans mb-10 text-3xl" data-aos="fade-down">Activities</h1>
        <div className="flex flex-col justify-between space-y-8">
          <div className="w-full flex flex-row justify-around">
            <div data-aos="fade-right">
              <div className="w-[36rem] h-[32rem] rounded-2xl overflow-hidden" >
                  <Link to="/dunes"><img src={dunes} className="w-full h-full hover"></img></Link>
              </div>
              <p className="font-ptSans w-full text-center mt-3 text-base">Dunes</p>
            </div>
              
            <div data-aos="fade-left">
            <div className="w-[36rem] h-[32rem] rounded-2xl overflow-hidden" >
                <Link to="/boat"><img src={boat} className="w-full h-full hover"></img></Link>
              </div>
              <p className="font-ptSans w-full text-center mt-3 text-base">Boat</p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-around">
          <div data-aos="fade-right">
            <div className="w-[36rem] h-[32rem] rounded-2xl overflow-hidden" >
                <Link to="/intertidal"><img src={intertidal} className="w-full h-full hover"></img></Link>
              </div>
              <p className="font-ptSans w-full text-center mt-3 text-base">Intertidal</p>
            </div>
            <div data-aos="fade-left">
            <div className="w-[36rem] h-[32rem] rounded-2xl overflow-hidden">
                <Link to="/marineInvert"><img src={marineInvert} className="w-full h-full hover"></img></Link>
              </div>
              <p className="font-ptSans w-full text-center mt-3 text-base">Marine Invertebrates</p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-around">
            <div>
              <div data-aos="fade-right">
                <div className="w-[36rem] h-[32rem] rounded-2xl overflow-hidden">
                  <Link to="/orgLab"><img src={orgLab} className="w-full h-full hover"></img></Link>
                </div>
                <p className="font-ptSans w-full text-center mt-3 text-base">Organism Lab</p>
              </div>
            </div>
            
            <div data-aos="fade-left">
              <div className="w-[36rem] h-[32rem] rounded-2xl overflow-hidden">
                <Link to="/sunrise"><img src={sunrise} className="w-full h-full hover"></img></Link>
              </div>
              <p className="font-ptSans w-full text-center mt-3 text-base">Sunrise</p>
            </div>
          </div>
          
          <div className="w-full flex flex-row justify-around">
            <div>
              <div data-aos="fade-right">
                <div className="w-[36rem] h-[32rem] rounded-2xl overflow-hidden">
                  <Link to="/misc"><img src={misc} className="w-full h-full hover"></img></Link>
                </div>
                <p className="font-ptSans w-full text-center mt-3 text-base">Miscellaneous</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  )
}

export default HomePage
