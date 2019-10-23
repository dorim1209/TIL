const users = [
  { name: "song" },
  { name: "Tony", phone: "000" },
  { name: "Hulk" },
  { name: "Thor" }
];

let user = null;
for (var i = 0; i < users.length; i++) {
  if (users[i].name === "Tony") {
    user = users[i];
    break;
  }
}

//ES6
user = users.find(user => {
  return user.name === "Tony";
});

const data = [
  { id: 1, name: "Tony" },
  { id: 2, name: "Hulk" },
  { id: 3, name: "Thor" },
  { id: 4, name: "Pepper" }
];
const whatWeWant = data.find(e => e.id === 3);
console.log(whatWeWant);

//실습
console.log("실습");
const products = [
  { name: "banana", type: "fruit" },
  { name: "carrot", type: "채소" },
  { name: "apple", type: "fruit" },
  { name: "달걀", type: "유제품" },
  { name: "yogurt", type: "유제품" }
];
//프로덕트 중 이름이 달걀인 제품을 가져와주세요
const product = products.find(e => e.name === "달걀");
console.log(product);
