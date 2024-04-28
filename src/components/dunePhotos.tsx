/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import blahaj from '../assets/peaks.png'
import dunes1 from '../assets/dunes/dunes1.jpeg';
import dunes2 from '../assets/dunes/dunes2.jpeg';
import dunes3 from '../assets/dunes/dunes3.jpeg';
import dunes4 from '../assets/dunes/dunes4.jpeg';
import dunes5 from '../assets/dunes/dunes5.jpeg';
import dunes6 from '../assets/dunes/dunes6.jpeg';
import dunes7 from '../assets/dunes/dunes7.jpeg';
import dunes8 from '../assets/dunes/dunes8.jpeg';
import dunes9 from '../assets/dunes/dunes9.jpeg';
import dunes10 from '../assets/dunes/dunes10.jpeg';
import dunes11 from '../assets/dunes/dunes11.jpeg';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosArr = [
  {
    src: `${dunes4}`,
    width: 1536,
    height: 2048,
  },
  {
      src: `${dunes2}`,
    width: 3024,
    height: 4032,
  },
  {
      src: `${dunes3}`,
    width: 5712,
    height: 4284,
  },
  {
    src: `${dunes1}`,
    width: 4032,
    height: 3024,
},
{
  src: `${dunes5}`,
  width: 2048,
  height: 1536,
},
{
  src: `${dunes6}`,
  width: 4032,
  height: 3024,
},
{
  src: `${dunes7}`,
  width: 3024,
  height: 4032,
},
{
  src: `${dunes8}`,
  width: 4032,
  height: 3024,
},
{
  src: `${dunes9}`,
  width: 4032,
  height: 3024,
},
{
  src: `${dunes10}`,
  width: 4032,
  height: 3024,
},
{
  src: `${dunes11}`,
  width: 5712,
  height: 4284,
},
]

const dunePhotos = photosArr.map((photo) => ({
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

export default dunePhotos;