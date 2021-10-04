// Change styling based on device width
const mediaQuery = (media, small, large) => {
  if (media === true) {
    return small;
  }
  return large;
};

export default mediaQuery;
