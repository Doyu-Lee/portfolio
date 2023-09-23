export const getPathFromURL = (url: string) => {
  return url.replace(/^\/(en|ko)\//, '/');
};
