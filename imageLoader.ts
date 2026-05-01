export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith('http')) {
    return src;
  }
  const path = src.startsWith('/') ? src : `/${src}`;
  return `/ekocentral-page${path}`;
}
