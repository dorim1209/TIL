const logger = require("./logger");
//module.exports를 리턴합니다.

const wrapper = () => {
  logger("프로그램 실행중 ....");
};

module.exports = wrapper;
