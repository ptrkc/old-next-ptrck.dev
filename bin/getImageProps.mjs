import { getPlaiceholder } from 'plaiceholder';

(async () => {
  const { base64, img } = await getPlaiceholder('/images/continha.png');
  console.log(`
  src="${img.src}"
  width={${img.width}}
  height={${img.height}}
  blurDataURL="${base64}"
  alt=""
  `);
})();
