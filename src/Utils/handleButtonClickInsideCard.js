function handleButtonClickInsideCard(e) {
  e.stopPropagation();
  e.preventDefault();
  e.nativeEvent.stopImmediatePropagation();
}

export default handleButtonClickInsideCard;
