/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import boat1 from '../assets/boat/boat1.jpeg';
import boat2 from '../assets/boat/boat2.jpeg';
import boat3 from '../assets/boat/boat3.jpeg';
import boat4 from '../assets/boat/boat4.jpeg';
import boat5 from '../assets/boat/boat5.jpeg';
import boat6 from '../assets/boat/boat6.jpeg';
import boat7 from '../assets/boat/boat7.jpeg';

import blahaj from '../assets/peaks.png';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosArr = [
  {
    src: `${boat4}`,
    width: 3024,
    height: 4032,
  },
  {
      src: `${boat2}`,
    width: 4032,
    height: 3024,
  },
  {
      src: `${boat3}`,
    width: 4032,
    height: 3024,
  },
  {
    src: `${boat1}`,
    width: 3024,
    height: 4032,
},
{
  src: `${boat5}`,
  width: 2048,
  height: 1536,
},
{
  src: `${boat6}`,
  width: 3024,
  height: 4032,
},
{
  src: `${boat7}`,
  width: 5712,
  height: 4284,
},
]

const boatPhotos = photosArr.map((photo) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));

export default boatPhotos;