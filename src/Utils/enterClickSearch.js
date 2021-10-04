// get input value from value ref using enter button and run search article method
const enterPressed = (event, SearchArticle, keyWord) => {
  const key = event.keyCode || event.which;
  if (key === 13) {
    SearchArticle(keyWord.current.value);
    // eslint-disable-next-line no-param-reassign
    keyWord.current.value = '';
  }
};

export default enterPressed;
