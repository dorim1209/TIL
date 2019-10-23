//ES5
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "채소" },
  { name: "apple", type: "fruit" },
  { name: "달걀", type: "유제품" },
  { name: "yogurt", type: "유제품" }
];

const fruits = [];
for (var i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    fruits.push(products[i]);
  }
}

const 유제품 = products.filter(element => {
  return element.type === "유제품";
});
console.log(유제품);

const comments = [
  { id: 1, author: "빈산", contents: "블라블라" },
  { id: 2, author: "김신", contents: "겨란이 왔어요" },
  { id: 3, author: "빈산", contents: "블라블라" },
  { id: 4, author: "김신", contents: "이북에서 왔어요" }
];

const 김신 = comments.filter(comment => comment.author === "김신");
console.log(김신);

//실습1
console.log("실습1");
const numbers = [1, 3, 5, 6, 10, 54, 25, 330, 220, 5];
//filter 10~100사이의 숫자만 뽑아 그 결과를 보여주세요
const show = numbers.filter(numbers => numbers > 10 && numbers < 100);
console.log(show);

//실습2
console.log("실습2");
//filter를 사용하셔서 reject함수를 만들어주세요
//reject함수는 filter와 완전히 반대 작용을 하는 함수입니다.
//numbers.reject(number => number >10);
function reject(arr, callback) {
  return arr.filter(e => !callback(e));
}

console.log(numbers);
console.log(reject(numbers, numbers => numbers > 10));
