import Gallery from '../components/Gallery';
import marineInvertPhotos from '../components/marineInvertPhotos';
import React from 'react';
import NavBar from "../components/NavBar";
import background from '../assets/background.jpg'
import { 
    BrowserRouter as Router, Routes, 
    Route, Link
} from "react-router-dom"; 
import Footer from "../components/Footer";

const MarineInvertPage = () => {
    return (
        <div >
            <div className="overflow-x-hidden h-[50vh] w-[100vw] relative bg-center background"
            style={{ 
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
            }}>
                <NavBar></NavBar>
                <div className="h-[50vh] flex flex-col justify-center text-white text-center">
                    <h2 className="text-8xl font-openSans font-extrabold mb-2">Dunes</h2>
                    <div className="w-full flex flex-row justify-center">
                    <Link to="/">
                        <p className="relative group w-fit">
                            <span>back</span>
                            <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"></span>
                            <span className="absolute -bottom-1 right-1/2 w-0 h-0.5 bg-white group-hover:w-1/2 group-hover:transition-all duration-200 mt-0.5"></span>
                        </p>
                    </Link>
                    </div>
                    
                </div>
            </div>

            <div className="mt-10 mx-32">
                <h1 className="w-full text-center px-80 mb-10 font-ptSans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</h1>
                <Gallery photos={marineInvertPhotos} />
            </div>
            
            <Footer></Footer>
        </div>
    );
};

export default MarineInvertPage;