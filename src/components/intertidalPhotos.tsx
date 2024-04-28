/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import blahaj from '../assets/peaks.png'
import intertidal1 from '../assets/intertidal/intertidal1.jpeg';
import intertidal2 from '../assets/intertidal/intertidal2.jpeg';
import intertidal3 from '../assets/intertidal/intertidal3.jpeg';
import intertidal4 from '../assets/intertidal/intertidal4.jpeg';
import intertidal5 from '../assets/intertidal/intertidal5.jpeg';
import intertidal6 from '../assets/intertidal/intertidal6.jpeg';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosArr = [
  {
    src: `${intertidal1}`,
    width: 4284,
    height: 5712,
  },
  {
      src: `${intertidal2}`,
    width: 3024,
    height: 4032,
  },
  {
      src: `${intertidal3}`,
    width: 3024,
    height: 4032,
  },
  {
    src: `${intertidal4}`,
    width: 3024,
    height: 4032,
},
{
  src: `${intertidal5}`,
  width: 4032,
  height: 3024,
},
{
  src: `${intertidal6}`,
  width: 3024,
  height: 4032,
},
]

const intertidalPhotos = photosArr.map((photo) => ({
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

export default intertidalPhotos;