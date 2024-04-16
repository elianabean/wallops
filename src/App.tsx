import { useState } from 'react'
import background from './background.jpg'
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function App() {
  const [index, setIndex] = useState(-1);

  return (
    <div className="overflow-x-hidden h-[100vh]"
    style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
    }}>
      <h2 className="text-center h-full flex flex-col justify-center font-playfairDisplay text-white text-8xl">Wallops Island</h2>

      <div className="h-full px-10 flex flex-col justify-center">
        <PhotoAlbum photos={photos} layout="rows" padding={(containerWidth) => {
          if (containerWidth < 768) return 2; //md
          if (containerWidth < 1024) return 5; //lg
          if (containerWidth < 1280) return 3; //xl
          return 5; //2xl
        }}
        targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

        <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
      </div>
      
    </div>
  )
}

export default App
