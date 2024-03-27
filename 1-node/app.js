const _ = require("lodash");
const lists = [1, [2, [3, [4]]]];
const finalList = _.flattenDeep(lists);
console.log(finalList);