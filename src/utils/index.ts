export const getPokeId = (url: string) => {
  const segments = url.split("/");
  const id = segments[segments.length - 2];
  return id;
};

export const getColor = (id: string) => {
  const element = document.getElementById(id);
  let backgroundColor;
  if (element) {
    const computedStyles = window.getComputedStyle(element);
    backgroundColor = computedStyles.backgroundColor;
    return backgroundColor;
  }
};
