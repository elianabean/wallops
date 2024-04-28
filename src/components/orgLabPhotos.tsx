/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import blahaj from '../assets/peaks.png'
import orgLab1 from '../assets/orgLab/orgLab1.jpeg';
import orgLab2 from '../assets/orgLab/orgLab2.jpeg';
import orgLab3 from '../assets/orgLab/orgLab3.jpeg';
import orgLab4 from '../assets/orgLab/orgLab4.jpeg';
import orgLab5 from '../assets/orgLab/orgLab5.jpeg';
import orgLab6 from '../assets/orgLab/orgLab6.jpeg';
import orgLab7 from '../assets/orgLab/orgLab7.jpeg';
import orgLab8 from '../assets/orgLab/orgLab8.jpeg';
import orgLab9 from '../assets/orgLab/orgLab9.jpeg';
import orgLab10 from '../assets/orgLab/orgLab10.jpeg';
import orgLab11 from '../assets/orgLab/orgLab11.jpeg';
import orgLab12 from '../assets/orgLab/orgLab12.jpeg';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosArr = [
  {
    src: `${orgLab4}`,
    width: 3024,
    height: 4032,
  },
  {
      src: `${orgLab2}`,
    width: 3024,
    height: 4032,
  },
  {
      src: `${orgLab3}`,
    width: 3024,
    height: 4032,
  },
  {
    src: `${orgLab1}`,
    width: 4284,
    height: 5712,
},
{
  src: `${orgLab5}`,
  width: 3024,
  height: 4032,
},
{
  src: `${orgLab6}`,
  width: 3024,
  height: 4032,
},
{
  src: `${orgLab7}`,
  width: 3024,
  height: 4032,
},
{
  src: `${orgLab8}`,
  width: 3024,
  height: 4032,
},
{
  src: `${orgLab9}`,
  width: 3024,
  height: 4032,
},
{
  src: `${orgLab10}`,
  width: 3024,
  height: 4032,
},
{
  src: `${orgLab11}`,
  width: 3024,
  height: 4032,
},
{
  src: `${orgLab12}`,
  width: 1536,
  height: 2048,
},
]

const orgLabPhotos = photosArr.map((photo) => ({
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

export default orgLabPhotos;