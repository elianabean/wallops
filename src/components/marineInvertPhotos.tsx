/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import blahaj from '../assets/peaks.png';
import marineInvert1 from '../assets/marineInvert/marineInvert1.jpeg';
import marineInvert2 from '../assets/marineInvert/marineInvert2.jpeg';
import marineInvert3 from '../assets/marineInvert/marineInvert3.jpeg';
import marineInvert4 from '../assets/marineInvert/marineInvert4.jpeg';
import marineInvert5 from '../assets/marineInvert/marineInvert5.jpeg';
import marineInvert6 from '../assets/marineInvert/marineInvert6.jpeg';
import marineInvert7 from '../assets/marineInvert/marineInvert7.jpeg';
import marineInvert8 from '../assets/marineInvert/marineInvert8.jpeg';
import marineInvert9 from '../assets/marineInvert/marineInvert9.jpeg';
import marineInvert10 from '../assets/marineInvert/marineInvert10.jpeg';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosArr = [
  {
    src: `${marineInvert1}`,
    width: 3024,
    height: 4032,
  },
  {
      src: `${marineInvert2}`,
    width: 4032,
    height: 3024,
  },
  {
      src: `${marineInvert3}`,
    width: 4032,
    height: 3024,
  },
  {
    src: `${marineInvert4}`,
    width: 3024,
    height: 4032,
},
{
  src: `${marineInvert5}`,
  width: 2048,
  height: 1536,
},
{
  src: `${marineInvert6}`,
  width: 3024,
  height: 4032,
},
{
  src: `${marineInvert7}`,
  width: 4032,
  height: 3024,
},
{
  src: `${marineInvert8}`,
  width: 3024,
  height: 4032,
},
{
  src: `${marineInvert9}`,
  width: 3024,
  height: 4032,
},
{
  src: `${marineInvert10}`,
  width: 3024,
  height: 4032,
},
]

const marineInvertPhotos = photosArr.map((photo) => ({
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

export default marineInvertPhotos;