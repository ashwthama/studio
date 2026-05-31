declare module '*.jpg' {
  const src: import('next/image').StaticImageData;
  export default src;
}

declare module '@hookform/resolvers/zod/dist/zod.js' {
  export const zodResolver: any;
}
