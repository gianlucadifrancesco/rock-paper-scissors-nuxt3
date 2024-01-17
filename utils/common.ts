export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getRandomShape = () => {
  const shapes = useShapes();
  return shapes[Math.floor(Math.random() * shapes.length)];
};
