// //ES5
// const numbers = [10, 20, 30];
// let sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }

// //ES6
// sum = numbers.reduce((acc, number) => {
//   return acc + number;
// }, 0);

// let multiply = numbers.reduce((acc, number) => acc * number);

// const strings = ["apple", "is", "good"];

// const summed = strings.reduce((acc, str) => acc + str, "");

// //map함수 구현하기
// const dNumbers = numbers.map(e => e * 2);
// dNumbers = numbers.reduce((acc, number) => {
//   acc.push(number * 2);
//   return acc;
// }, []);
// console.log(acc);

// function isGoodParens(string) {
//   return !string.split("").reduce((acc, char) => {
//     if (acc < 0) {
//       return acc;
//     } else if (char === "(") {
//       ++acc;
//     } else {
//       --acc;
//     }
//     return acc;
//   });
// }
// // '()()' acc:0, char:( => 1, )=>0

// // '', undefined, null, 0 => false !!
// // !0 : true

//실습1
console.log("실습1");
const 참석자 = [
  { id: 1, type: "sitting" },
  { id: 2, type: "sitting" },
  { id: 3, type: "standing" },
  { id: 4, type: "sitting" },
  { id: 5, type: "standing" }
];

//reduce를 사용해서 서있는 사람, 혹은 앉아있는 사람의 수를 출력
const 서있는사람 = 참석자.reduce((acc, person) => {
  if (person.type === "standing") acc++;
  return acc;
}, 0);
console.log(서있는사람);
//실습2
console.log("실습2");
const samples = [10, 20, 30, 20, 40, 10, 50];
//const samples = unique(samples);
//[10,20,30,40,50]
function unique(acc) {
  //채워주세요!
  //reduce를 사용하면 좋구요
  //find도 사용하면 좋아요
  //someArr.find(callback):만족하는 값이 없다면?
  //undefined를 리턴합니다.

  return acc.reduce((acc, element) => {
    if (!acc.find(el => el === element)) {
      acc.push(element);
    }
    return acc;
  }, []);
}
