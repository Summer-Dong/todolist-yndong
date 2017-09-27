//less well
export const A='a';

const B='b';
export {B};

//well
const C='c';
const D='d';
export {C,D};

export const sumXAndY=(x, y)=>x+y;

const minus=(m, n)=>m-n;
export {minus as minusMAndN}