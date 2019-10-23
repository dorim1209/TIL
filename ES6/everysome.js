// //ES5
// const computers = [
//   { name: "mac-air", ram: 8 },
//   { name: "gram", ram: 4 },
//   { name: "mac-pro", ram: 16 }
// ];

// let everyComputersAvailable = true;
// let someComputersAvailable = false;

// for (var i = 0; i < computers.length; i++) {
//   const computer = computers[i];
//   if (computer.ram < 8) {
//     everyComputersAvailable = false;
//     break;
//   }
//   if (computer.ram > 8) {
//     someComputersAvailable = true;
//     break;
//   }
// }

// console.log(everyComputersAvailable);
// console.log(someComputersAvailable);

// //ES6

// let everyComputersAvailable = true;
// let someComputersAvailable = false;

// everyComputersAvailable = computers.every(computer => computer.ram > 8);
// someComputersAvailable = computers.some(computer => computer.ram > 8);
// console.log(everyComputersAvailable);
// console.log(someComputersAvailable);

// const data = [
//   { name: "song", answer: "you pork" },
//   { name: "bing", answer: "" },
//   { name: "san", answer: "great!" }
// ];

// const everyUserAnswered = data.every(e => e.answer.length > 0);
// console.log(everyUserAnswered);

//실습1
console.log("실습1");
const users = [
  { id: 1, submit: true },
  { id: 2, submit: false },
  { id: 3, submit: true },
  { id: 4, submit: true }
];

//모든 사람이 제출 했나요? every
//한명이라도 제출 했나요? some

const everyUserSubmitted = users.every(e => e.submit == true);
const someUserSubmitted = users.some(e => e.submit == true);
console.log(everyUserSubmitted);
console.log(someUserSubmitted);

//실습2
console.log("실습2");
function some(arr, callback) {
  //every를 사용해서 some을 만들어주세요!
  //실습1번으로 맞게 구현되었는지 확인해주세요!
  return !arr.every(e => !callback(e));
}

console.log(some(users, users => users.submit == true));
