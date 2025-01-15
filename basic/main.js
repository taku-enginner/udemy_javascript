// console.log(count);
// 変数宣言、初期化、初期値
let count = 0;
// console.log(count);
count = 10;
// console.log(count);
let newcount = 0;

// 基本的には定数を使う
const daysInWeek = 7;

// JavaScriptの変数名はキャメルケースがメジャー
let tomatoCountNumber;
let tomato$Count;
let _tomato_Count;
let tomato2Count2;
let トマトカウント;
let tomatocount;

let additionResult = 7 + 5;
// console.log(additionResult);

let result = 5;
result = additionResult;
result += 10;
console.log(result++);
result;
++result;
// console.log(result);

// ++resultは＋１した後の値を返し、result++は＋１する前の値を返す

// 17
// number型
let number = 10;
number = -4;
number = 32.42;
// string型
let string = 'Hello';
number = 'something'; //これはできる。常にどんな方でも入れられる。動的型付け言語

// 18
const userName = 'Yoshipi';
string = 'Hello ' + userName + '!';
string = `Hello ${userName}!`;
string = "'";
string = '\'\\"'; // \はエスケープ文字
string = 'Hello Yoshipi!\ntatata';
string = `Hello Yoshipi!





tatata`; // バッククォートで改行も入れられる
console.log(string);

//20
const userInput = '10';
let calcResult;
calcResult = Number(userInput) + 10;
console.log(calcResult);
calcResult = parseInt(userInput) + 10;
console.log(calcResult);
calcResult = parseFloat(userInput) + 10;
console.log(calcResult);
calcResult = +userInput + 10;
console.log(calcResult);

const tenNumber = 10;
calcResult = '10' + String(tenNumber);
calcResult = '10' + tenNumber.toString();
console.log(calcResult);

// 21
let boolean = true;
boolean = false;

// 22
let array = ['apple', 'banana', 'orange'];
appay = [1,2,3,4,5];
array = [1, 'apple', true, null,array ];
console.log(array[1]);
array = [];
array.push('apple');
console.log(array);

// 23
const coffee = {
  name: 'Chocolate Mocha', //プロパティというときは、name: 'Chocolate Mocha'の部分
  size: 350,
  isHot: true,
  toppings: ['chocolate', 'marshmallow'],
  nutritions: {
    calorie: 450,
    sugar: 40,
  },
};