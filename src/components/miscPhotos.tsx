/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import blahaj from '../assets/peaks.png'

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const photosArr = [
  {
    src: `${blahaj}`,
    title: 'Blahaj One',
    description: 'Slide Description One\n\nthis is new line',
    width: 3000,
    height: 800,
  },
  {
      src: `${blahaj}`,
    title: 'Blahaj Two',
    description: 'Nom nom nom nom',
    width: 1080,
    height: 1620,
  },
  {
      src: `${blahaj}`,
      title: 'Blahaj Three',
      description: 'Nom nom nom nom',
    width: 1080,
    height: 720,
  },
  {
    src: `${blahaj}`,
    title: 'Blahaj Four',
    description: 'Nom nom nom nom',
    width: 1080,
    height: 721,
},
{
  src: `${blahaj}`,
  title: 'Blahaj Five',
  description: 'Nom nom nom nom',
  width: 1080,
  height: 1620,
},
{
  src: `${blahaj}`,
  title: 'Blahaj Six',
  description: 'Nom nom nom nom',
  width: 1080,
  height: 607,
},
{
  src: `${blahaj}`,
  title: 'Blahaj Six',
  description: 'Nom nom nom nom',
  width: 1080,
  height: 608,
},
{
  src: `${blahaj}`,
  title: 'Blahaj Six',
  description: 'Nom nom nom nom',
  width: 1080,
  height: 720,
},
{
  src: `${blahaj}`,
  title: 'Blahaj Six',
  description: 'Nom nom nom nom',
  width: 1080,
  height: 1549,
},
{
  src: `${blahaj}`,
  title: 'Blahaj Six',
  description: 'Nom nom nom nom',
  width: 1080,
  height: 720,
},
{
  src: `${blahaj}`,
  title: 'Blahaj Six',
  description: 'Nom nom nom nom',
  width: 1080,
  height: 694,
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