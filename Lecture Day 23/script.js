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
