export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith('http')) {
    return src;
  }
  return `/ekocentral-page${src}`;
}
