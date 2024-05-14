function getElementWidth(content, padding, border) {
  let contentWidth = parseFloat(content);
  let paddingWidth = parseFloat(padding);
  let borderWidth = parseFloat(border);
  return contentWidth + 2 * paddingWidth + 2 * borderWidth;
}
