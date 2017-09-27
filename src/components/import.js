import {A, B, C, D, minusMAndN} from './export';
// import * as exports from './export';

import {sumXAndY as xAndY} from "./export";


const Import = () => {
  console.log(A);
  console.log(B);
  console.log(C);
  console.log(D);
  console.log(xAndY(2, 3));
  console.log(minusMAndN(2,1));

  return null;
}

export default Import;
