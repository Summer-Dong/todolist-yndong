// less well
export const A = 'a';

const B = 'b';
export { B };

// well
const C = 'c';
const D = 'd';
export { C, D };

export default function (x, y) { return x + y; }

const minus = (m, n) => m - n;
export { minus as minusMAndN };

// //less well
// const A='a';
// const B='b';
//
// //well
// const C='c';
// const D='d';
//
// const sumXAndY=(x, y)=>x+y;
// const minus=(m, n)=>m-n;
