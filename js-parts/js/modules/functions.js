console.log('functions.js file was loaded');

export function sum(sk1, sk2) {
  let sum = sk1 + sk2;
  console.log(`sudejus ${sk1} + ${sk2} gausim: ${sum}`);
  return sum;
}

export const getTotal = function (arr) {
  let total = 0;
  arr.forEach((sk) => {
    total = total + sk;
  });
  console.log('total ===', total);
  return total;
};
