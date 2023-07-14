// named exporto importas
import { username, age } from './vars.js';
import { sum } from './modules/functions.js';
import { printToHtml } from './modules/html.js';
import { town, avgArr } from './modules/variables.js';
// iskonsolinti username ir age esanti vars.js
console.log('app.js file was loaded');
console.log('username ===', username);
console.log('age ===', age);
// const age = 65;

const rezult = sum(111, 222);

// atspausdinti tai ka grazina  sum(111, 222); su printToHtml
printToHtml(rezult);
printToHtml('labukas');
printToHtml('Man jau labai neblogai eina javascripts');

console.log('town ===', town);
printToHtml('lietuvos sirdis: ' + town);
console.log('avgArr ===', avgArr);
