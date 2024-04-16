/* Source: https://codesandbox.io/p/devbox/romantic-bhaskara-82djq9?file=%2Fsrc%2Fphotos.ts%3A35%2C46-35%2C47*/
import blahaj from './blahaj.jpg'

const photosArr = [
    {
      src: `${blahaj}`,
      title: 'Blahaj One',
      description: 'Slide Description One\n\nthis is new line',
      width: 1080,
      height: 800,
    },
    {
        src: `${blahaj}`,
      title: 'Blahaj Two',
      description: 'Nom nom nom nom',
      width: 900,
      height: 600,
    },
    {
        src: `${blahaj}`,
        title: 'Blahaj Three',
        description: 'Nom nom nom nom',
      width: 400,
      height: 700,
    },
]

const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const photos = photosArr.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;
    const src = photo.src;
  
    return {
      src,
      width,
      height,
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: src,
          width: breakpoint,
          height,
        };
      }),
    };
  });

export default photos;