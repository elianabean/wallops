import Gallery from '../components/Gallery';
import React from 'react';
import NavBar from "../components/NavBar";
import background from '../assets/background.jpg'
import { 
    BrowserRouter as Router, Routes, 
    Route, Link
} from "react-router-dom"; 
import Footer from "../components/Footer";
import { Photo } from './Photo';

function PageTemplate({ name, description, photosArr }: {name: string; description: string; photosArr: Photo[]}) {
    return (
        <div >
            <div className="overflow-x-hidden h-[50vh] w-[100vw] relative bg-center background"
            style={{ 
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover',
            }}>
                <NavBar></NavBar>
                <div className="h-[50vh] flex flex-col justify-center text-white text-center">
                    <h2 className="text-8xl font-openSans font-extrabold mb-2">{name}</h2>
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
                <h1 className="w-full text-center px-80 mb-10 font-ptSans">{description}</h1>
                <Gallery photos={photosArr} />
            </div>
            
            <Footer></Footer>
        </div>
    );
}

export default PageTemplate;