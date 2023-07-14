console.log('html.js file was loaded');

// defaut/numatytasis exportas
export default function printToHtml(whatToPrint) {
  const pEl = document.createElement('p');
  pEl.textContent = whatToPrint;
  document.body.append(pEl);
}
// vardinis exportas
export const randomNumber = 458;
