import Gallery from '../components/Gallery';
import dunePhotos from '../components/dunePhotos';
import React from 'react';

const DunesPage = () => {
    return (
        <div>
            <Gallery photos={dunePhotos} />
        </div>
    );
};

export default DunesPage;