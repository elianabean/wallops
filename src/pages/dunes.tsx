import Gallery from '../components/Gallery';
import dunePhotos from '../components/dunePhotos';
import React from 'react';
import NavBar from "../components/NavBar";
import background from '../assets/background.jpg'
import { 
    BrowserRouter as Router, Routes, 
    Route, Link
} from "react-router-dom"; 

const DunesPage = () => {
    return (
        <div>
            <div className="overflow-x-hidden h-[50vh] w-[100vw] relative bg-center"
            style={{ 
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
            }}>
                <NavBar></NavBar>
                <div className="h-[50vh] flex flex-col justify-center text-white text-center">
                    <h2 className="text-8xl font-openSans font-extrabold mb-2">Dunes</h2>
                    <Link to="/"><h6 className="text-2xl font-ptSans">Home</h6></Link>
                </div>
            </div>

            <div className="mt-10 mx-32">
                <h1 className="w-full text-center px-80 mb-10 font-ptSans">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est</h1>
                <Gallery photos={dunePhotos} />
            </div>
            
        </div>
    );
};

export default DunesPage;