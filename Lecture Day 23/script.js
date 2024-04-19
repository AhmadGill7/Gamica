// task#1
// range kay andr se wo number nikalne hn jo prime nahi hn

// task#2
// number sequence m jo bhi prime numbers hn unko sum krlena h
// let a  =   "22.13.82.12.17";
// result --> "22.4 .82.12.8"

// task#1
// range kay andr se wo number nikalne hn jo prime nahi hn

// let bb = primeFinder(10, 17);
// console.log(bb);
// function primeFinder(a, b) {
//   let x = "";
//   for (let i = a; i <= b; i++) {
//     x += checkPrime(i) + " ";
//     x = x.slice(0, -1);
//   }
//   return x;
// }
// function checkPrime(num) {
//   let primeH = " is Prime , ";
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       primeH = " not Prime , ";
//       break;
//     }
//   }
//   return num + primeH;
// }

// Task#2
// number sequence m jo bhi prime numbers hn unko sum krlena h

// let a = "22.13.17.20.90.53";
// // Code Below
// let data = a.split(".");
// let newList = "";
// for (let i = 0; i < data.length; i++) {
//   if (checkPrime(data[i]) == true) {
//     let some = data[i];
//     let b = some.split("");
//     let sum = b.reduce((a,b) => +a + +b);
//     newList += sum +".";
// } else {
//     newList += data[i] + ".";
//   }
// }
// let res = newList.slice(0,-1)
// console.log(res);

// function checkPrime(num) {
//   let primeH = true;
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       primeH = false;
//       break;
//     }
//   }
//   return primeH;
// }

// let student = {
//   neme : "ahmad",
//   roll : 7007,
//   institute : "Gamica",
//   city : "Faisalabad",
//   degree : "Full Stack Web dev"
// }
// console.log(student.degree)

// let a = "This website is for losers LOL!";
// let b = disemvowel(a);
// console.log(b);
// function disemvowel(str) {

// }
// let threeTrues = [true, true, false,true, false, true, false];
// let x = countTrue(threeTrues);
// console.log(x);

// function countTrue(arr) {
//   a = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == true) {
//       a++;
//     }
//   }
//   return a;
// }

// function nextEdge(side1, side2) {
// 	return (side1 + side2) -1;
// }

// Codewars Task
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function () {

//   let sentence = this.split(" ");
//   for (let i=0; i < sentence.length; i++) {
//     sentence[i] = sentence[i][0].toUpperCase() + sentence[i].substr(1);
// }

//   return sentence.join(" ");

// };
// let quote = "lorem ipsum this that Flam flan and the sentence of the flan flan";
// let x = quote.toJadenCase();
// console.log(x);

function sevenBoom(arr) {
  let res = "";
  let splited = arr.split("");

  if (splited.includes("7")) {
    res = "Boom!";
  } else {
    res = "there is no 7 in the array";
  }
  return res;
}
let arre = [12, 20, 30, 67, 80];
let x = sevenBoom(arre);
console.log(x);
