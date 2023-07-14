console.log('app.js file was loaded');
// named exporto importas
import { username, age } from './vars.js';
import { sum } from './modules/functions.js';
// iskonsolinti username ir age esanti vars.js
console.log('username ===', username);
console.log('age ===', age);
// const age = 65;

sum(111, 222);
