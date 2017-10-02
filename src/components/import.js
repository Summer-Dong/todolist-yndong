import {A, B, C, D, minusMAndN} from './export';

import sumXAndY from "./export";

const Import = () => {
  console.log(A);
  console.log(B);
  console.log(C);
  console.log(D);
  console.log(sumXAndY(2, 3));
  console.log(minusMAndN(2,1));

  return null;
}

// import * as exportFunc from "./export";
//
// function Import(){
//   console.log(exportFunc.A);
//   console.log(exportFunc.B);
//   console.log(exportFunc.C);
//   console.log(exportFunc.D);
//   console.log(exportFunc.minusMAndN(4,3));
//   console.log(exportFunc.sumXAndY(1,2));
//   return null;
// }


export default Import;
