/**
 * Multiple Ways to Import and Export
 */
// import { IdolModel as Idol, rose, number, ICat } from "./2_export_1";

// console.log(new Idol('아이유',32));

// import * as export2 from "./2_export_1"

// console.log(export2.rose)

// import cf, {rose, number} from './2_export_1';

// console.log(cf);
// console.log(rose);
// console.log(number);

import {IdolModel} from "15_import_and_export/2_export_1";

console.log(new IdolModel('아이유',32));