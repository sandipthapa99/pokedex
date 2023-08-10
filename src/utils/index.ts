export const getPokeId = (url: string) => {
  const segments = url.split("/");
  const id = segments[segments.length - 2];
  return id;
};
