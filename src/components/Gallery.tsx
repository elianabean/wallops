import { useState } from 'react'
import PhotoAlbum from "react-photo-album";
import { Photo } from './Photo';


import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface GalleryProps {
    photos: Photo[];
}

const Gallery: React.FC<GalleryProps> = ({ photos }) => {
    const [index, setIndex] = useState(-1);

    return (
        <div>
            <PhotoAlbum photos={photos} layout="rows" padding={0}
          targetRowHeight={400} onClick={({ index }) => setIndex(index)} />

          <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          // enable optional lightbox plugins
          plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
        />
        </div>
    );
}
export default Gallery;