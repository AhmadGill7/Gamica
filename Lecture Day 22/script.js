



// home work#1
// 234.467.22.77.2

// // home work#2
// let data1 = "10,55,22,77,32,10"
// "even,odd,even,odd,even,even"

// home work#3
// let data2 = "..#...#.#....#.";
//             '2#3#1#4#1'









// Home Work #1
// let data = "243.467.22.77.2";
// The answer Should be like this "243.9.467.17.22.4.77.14.2"
// Lets Begin

// let data1 = "243.467.22.77.2.33";
// let splitedData1 = data1.split(".");
// let st = "";
// let newIP = ""
// for (const i of splitedData1) {
//   sumOfIP = i.split("");
//   let res = sumOfIP.reduce(function (a, b) {
//     return +a + +b;
//   });
//   st += i + "." + res + ".";
//   newIP = st.slice(0,-1)
// }
// // console.log(st);
// console.log(newIP);









// Homework#2
// let data = "10,55,22,77,32,10"
// defind that the numbers in this array are odd or even?

// let data2 = "10,55,22,77,32,10";
// let num = data2.split(",")
// console.log(num)
// for (let i = 0; i < num.length; i++) {
//   if ((+num[i] % 2 == 0)) {
//     console.log("This number ", num[i], "Is Even");
//   } else {
//     console.log("This number ", num[i], "Is odd");
//   }
// }










// Home Work#3
// let data2 = "..#...#.#....#.";
//the answer should be the total dots before "#" instead of dote
// like in this case the anser should be something like this '2#3#1#4#1'
// Lets Start

// let data3 = "..#...#.#....#.";
// let splitedData3 = data3.split("#");
// console.log(data3);
// let res = ""
// for (let i = 0; i < splitedData3.length; i++) {
//   let length = splitedData3[i].length;
//   res += length + "#"
  
// }
// let finalRes = res.slice(0,-1)
// console.log(finalRes)











// let str = '';

// let some = "122.33.712.31.456.19.378";

// let items = some.split('.')
// console.log(items)
// for(let item of items){
//   let s1 = '';
//   let nums =  item.split('');
//   //   [1,2,2]

//   for(let i = nums.length-1; i>=0;i--){
//       let ch = nums[i];
//       s1 += ch;
//   }

//   console.log(nums)
//       str +=  s1 + ".";
// }

// str = str.slice(0,-1);
// console.log(str);

// let data = "5.6.10.3";

// let st = "";

// let data = "243";

// let letters = data.split('');

// for(let i = 0;i<letters.length;i++){

//     let ch =  letters[i];
//     st += ch;
//     st += ".".repeat(ch);

// }

// console.log(st)

// a = [20,30,40,50,60]

// b = a.reduce(function(a, b){
//     return a+ b;
// })

// alert(b)

// [10,20,30,40,50,60,70]

// // alternate method
// sentence.match(/(\d+)/g).reduce(function dfgdf(a,b){
//     return +a + +b;
// })
