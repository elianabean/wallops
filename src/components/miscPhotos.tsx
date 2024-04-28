/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import blahaj from '../assets/peaks.png';
import misc1 from '../assets/miscFolder/misc1.jpeg';
import misc2 from '../assets/miscFolder/misc2.jpeg';
import misc3 from '../assets/miscFolder/misc3.jpeg';
import misc4 from '../assets/miscFolder/misc4.jpeg';
import misc5 from '../assets/miscFolder/misc5.jpeg';
import misc6 from '../assets/miscFolder/misc6.jpeg';
import misc7 from '../assets/miscFolder/misc7.jpeg';
import misc8 from '../assets/miscFolder/misc8.jpeg';
import misc9 from '../assets/miscFolder/misc9.jpeg';
import misc10 from '../assets/miscFolder/misc10.jpeg';
import misc11 from '../assets/miscFolder/misc11.jpeg';
import misc12 from '../assets/miscFolder/misc12.jpeg';
import misc13 from '../assets/miscFolder/misc13.png';
import misc14 from '../assets/miscFolder/misc14.png';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosArr = [
  {
    src: `${misc1}`,
    width: 2049,
    height: 1536,
  },
  {
      src: `${misc2}`,
    width: 2049,
    height: 1536,
  },
  {
      src: `${misc3}`,
    width: 2049,
    height: 1536,
  },
  {
    src: `${misc4}`,
    width: 2049,
    height: 1536,
},
{
  src: `${misc5}`,
  width: 2049,
  height: 1536,
},
{
  src: `${misc6}`,
  width: 3024,
  height: 4032,
},
{
  src: `${misc7}`,
  width: 2049,
  height: 1536,
},
{
  src: `${misc8}`,
  width: 2049,
  height: 1536,
},
{
  src: `${misc9}`,
  width: 2049,
  height: 1536,
},
{
  src: `${misc10}`,
  width: 2049,
  height: 1536,
},
{
  src: `${misc11}`,
  width: 2049,
  height: 1536,
},
{
  src: `${misc12}`,
  width: 2048,
  height: 1538,
},
{
  src: `${misc13}`,
  width: 2048,
  height: 1538,
},
{
  src: `${misc14}`,
  width: 1537,
  height: 2049,
},
]

const miscPhotos = photosArr.map((photo) => ({
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

export default miscPhotos;