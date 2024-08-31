//function to create a element and its content;

export function createContent(element, text = "") {
  // Create the  element
  const content = document.createElement(element);

  content.textContent = text;

  // Return the created div element
  return content;
}
