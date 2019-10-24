const _ = require("underscore");
const numbers = _.range(1, 46);

module.exports = _.sample(numbers, 6).sort((a, b) => a - b);
//[3,4,1,25,2,10]
