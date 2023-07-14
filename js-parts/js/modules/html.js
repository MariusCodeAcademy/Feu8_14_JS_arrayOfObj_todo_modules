console.log('html.js file was loaded');

export function printToHtml(whatToPrint) {
  const pEl = document.createElement('p');
  pEl.textContent = whatToPrint;
  document.body.append(pEl);
}
