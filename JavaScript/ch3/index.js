import * as circle from "./circle.js"
import lodash from "lodash"

const arr = [1111, 222, 111, 44, 33, 222];

// lodash 에는 객체와 배열 관련 기능을 제공.
const uniqArr = lodash.uniqBy(arr);

console.log(uniqArr);
