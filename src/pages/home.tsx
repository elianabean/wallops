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

import '../parallaxStyles.css';

import peaks from '../assets/peaks.png';
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
    let ctx = gsap.context(() => {
        gsap.registerPlugin(ScrollTrigger);
        var tl = gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: parallaxRef.current,
                start: "top top",
                end: "1500 bottom",
                scrub: true,
                pin: true,
            },
        });

        tl.to(
          cloud1Ref.current,
          {
              x: "-=500",
          },
          0
        );
        tl.to(
          cloud2Ref.current,
          {
              x: "-=500",
          },
          0
        );
        tl.to(
          cloud3Ref.current,
          {
              x: "-=500",
          },
          0
        );
        tl.to(
          cloud4Ref.current,
          {
              x: "+=500",
          },
          0
        );
        tl.to(
          cloud5Ref.current,
          {
              x: "+=500",
          },
          0
        );
        
    });
    return () => ctx.revert();
}, []);

  return (
    <div className="h-full">
        <NavBar></NavBar>
        <div className="parallax-outer" >
          <div ref={parallaxRef} className="parallax" style={{ 
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
      }}>
            <img ref={cloud1Ref} className="cloud1 absolute" src={cloud1}></img>
            <img ref={cloud2Ref} className="cloud2 absolute" src={cloud2}></img>
            <img ref={cloud3Ref} className="cloud3 absolute" src={cloud3}></img>
            <img ref={cloud4Ref} className="cloud4 absolute" src={cloud4}></img>
            <img ref={cloud5Ref} className="cloud5 absolute" src={cloud5}></img>
          </div>
        </div>
        <div className="h-[100vh] flex flex-col justify-center text-white text-center absolute top-0 w-full">
          <h2 className="text-8xl font-openSans font-extrabold mb-6">Wallops Island</h2>
          <h6 className="text-2xl font-ptSans">MBHS Class of 2026</h6>
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
              <Link to="/boat"><img src={peaks} className="w-[36rem] h-[32rem]"></img></Link>
                <p className="font-ptSans w-full text-center mt-3 text-base">Boat</p>
              </div>
          </div>

          <div className="w-full flex flex-row justify-around">
            <div className="">
              <Link to="/intertidal"><img src={peaks} className="w-[36rem] h-[32rem]"></img></Link>
              <p className="font-ptSans w-full text-center mt-3 text-base">Intertidal</p>
            </div>
            <div>
              <Link to="/marineInvert"><img src={peaks} className="w-[36rem] h-[32rem]"></img></Link>
              <p className="font-ptSans w-full text-center mt-3 text-base">Marine Invertebrates</p>
            </div>
          </div>

          <div className="w-full flex flex-row justify-around">
            <div className="">
              <Link to="/orgLab"><img src={peaks} className="w-[36rem] h-[32rem]"></img></Link>
              <p className="font-ptSans w-full text-center mt-3 text-base">Organism Lab</p>
            </div>
            <div>
              <Link to="/misc"><img src={peaks} className="w-[36rem] h-[32rem]"></img></Link>
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
