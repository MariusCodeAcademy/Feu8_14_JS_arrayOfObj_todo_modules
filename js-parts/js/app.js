// named exporto importas
import { username, age } from './vars.js';
import { sum, getTotal } from './modules/functions.js';
import { makeFirstCapital } from './modules/helper.js';
// default and named export import
import printOnPage, { randomNumber } from './modules/html.js';
import { town, avgArr } from './modules/variables.js';

// iskonsolinti username ir age esanti vars.js
console.log('app.js file was loaded');
console.log('username ===', username);
console.log('age ===', age);
// const age = 65;

const rezult = sum(111, 222);
console.log('randomNumber ===', randomNumber);
// atspausdinti tai ka grazina  sum(111, 222); su printToHtml
printOnPage(rezult);
printOnPage('labukas');
printOnPage('Man jau labai neblogai eina javascripts');

console.log('town ===', town);
printOnPage('lietuvos sirdis: ' + town);
console.log('avgArr ===', avgArr);
const avgTotal = getTotal(avgArr);
printOnPage(avgTotal + ' is the total');

const str1 = makeFirstCapital('viskas mazosiom raidem');
printOnPage(str1);
