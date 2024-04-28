/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import blahaj from '../assets/peaks.png';
import sunrise1 from '../assets/sunrise/sunrise1.jpeg';
import sunrise2 from '../assets/sunrise/sunrise2.jpeg';
import sunrise3 from '../assets/sunrise/sunrise3.jpeg';
import sunrise4 from '../assets/sunrise/sunrise4.jpeg';
import sunrise5 from '../assets/sunrise/sunrise5.jpeg';
import sunrise6 from '../assets/sunrise/sunrise6.jpeg';
import sunrise7 from '../assets/sunrise/sunrise7.jpeg';
import sunrise8 from '../assets/sunrise/sunrise8.jpeg';
import sunrise9 from '../assets/sunrise/sunrise9.jpeg';
import sunrise10 from '../assets/sunrise/sunrise10.jpeg';
import sunrise11 from '../assets/sunrise/sunrise11.jpeg';
import sunrise12 from '../assets/sunrise/sunrise12.jpeg';
import sunrise13 from '../assets/sunrise/sunrise13.jpeg';
import sunrise14 from '../assets/sunrise/sunrise14.jpeg';
import sunrise15 from '../assets/sunrise/sunrise15.jpeg';
import sunrise16 from '../assets/sunrise/sunrise16.jpeg';
import sunrise17 from '../assets/sunrise/sunrise17.jpeg';
import sunrise18 from '../assets/sunrise/sunrise18.jpeg';
import sunrise19 from '../assets/sunrise/sunrise19.jpeg';
import sunrise20 from '../assets/sunrise/sunrise20.jpeg';
import sunrise21 from '../assets/sunrise/sunrise21.jpeg';
import sunrise22 from '../assets/sunrise/sunrise22.jpeg';
import sunrise23 from '../assets/sunrise/sunrise23.jpeg';
import sunrise24 from '../assets/sunrise/sunrise24.jpeg';
import sunrise25 from '../assets/sunrise/sunrise25.jpeg';
import sunrise26 from '../assets/sunrise/sunrise26.jpeg';
import sunrise27 from '../assets/sunrise/sunrise27.jpeg';
import sunrise28 from '../assets/sunrise/sunrise28.jpeg';
import sunrise29 from '../assets/sunrise/sunrise29.jpeg';
import sunrise30 from '../assets/sunrise/sunrise30.jpeg';
import sunrise31 from '../assets/sunrise/sunrise31.jpeg';
import sunrise32 from '../assets/sunrise/sunrise32.jpeg';
import sunrise33 from '../assets/sunrise/sunrise33.jpeg';


const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosArr = [
  {
    src: `${sunrise1}`,
    width: 2049,
    height: 1536,
  },
  {
      src: `${sunrise2}`,
    width: 2049,
    height: 1536,
  },
  {
      src: `${sunrise3}`,
    width: 2048,
    height: 1536,
  },
  {
    src: `${sunrise4}`,
    width: 1536,
    height: 2049,
},
{
  src: `${sunrise5}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise6}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise7}`,
  width: 4032,
  height: 3024,
},
{
  src: `${sunrise8}`,
  width: 4032,
  height: 3024,
},
{
  src: `${sunrise9}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise10}`,
  width: 1536,
  height: 2048,
},
{
  src: `${sunrise11}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise12}`,
  width: 3024,
  height: 4032,
},
{
  src: `${sunrise13}`,
  width: 1536,
  height: 2049,
},
{
  src: `${sunrise14}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise15}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise16}`,
  width: 1536,
  height: 2048,
},
{
  src: `${sunrise17}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise18}`,
  width: 4878,
  height: 1536,
},
{
  src: `${sunrise19}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise20}`,
  width: 1536,
  height: 2049,
},
{
  src: `${sunrise28}`,
  width: 4032,
  height: 3024,
},
{
  src: `${sunrise21}`,
  width: 1536,
  height: 2048,
},
{
  src: `${sunrise22}`,
  width: 720,
  height: 1280,
},
{
  src: `${sunrise23}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise30}`,
  width: 4032,
  height: 3024,
},
{
  src: `${sunrise24}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise25}`,
  width: 3024,
  height: 4032,
},
{
  src: `${sunrise26}`,
  width: 3024,
  height: 4032,
},
{
  src: `${sunrise27}`,
  width: 3024,
  height: 4032,
},
{
  src: `${sunrise32}`,
  width: 2048,
  height: 1536,
},
{
  src: `${sunrise29}`,
  width: 3024,
  height: 4032,
},
{
  src: `${sunrise31}`,
  width: 4032,
  height: 3024,
},
{
  src: `${sunrise33}`,
  width: 4032,
  height: 3024,
},
]

const sunrisePhotos = photosArr.map((photo) => ({
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

export default sunrisePhotos;