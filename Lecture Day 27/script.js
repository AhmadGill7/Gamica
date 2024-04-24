// let x = ["Faisalabad", "Farooqabad", "Lahore", "Karachi", "Multan"];
// let endsWithD = [];
// for (const city of x) {
//   if (city[city.length - 1] == "d") {
//     endsWithD.push(city);
//   }
// }

// for(let city of x){
//     city = city + "d";
//     if(city.endsWith("d")){
//         endsWithD.push(city);
//     }
// }

// for(let city of x){
//     if(city.endsWith("d")){
//         endsWithD.push(city);
//     }
// }

// console.log(endsWithD);

// let oneWali = [];
// let twoWali = [];
// let threeWali = [];

// let nums = [100, 240, 32, 19, 27, 38, 33];
// let str = [];
// for (const i of nums) {
//   str.push(i.toString());
// }
// for (const i of str) {
//   if (i.startsWith("1")) {
//     oneWali.push(+i);
//   } else if (i.startsWith("2")) {
//     twoWali.push(+i);
//   } else if (i.startsWith("3")) {
//     threeWali.push(+i);
//   }
// }
// console.log(oneWali);
// console.log(twoWali);
// console.log(threeWali);

// let districts = [
//   {
//     name: "Faisalabad",
//     tehsils: ["FSD City", "jaranwala", "jhumra"],
//   },
//   {
//     name: "TOba",
//     tehsils: ["Toba City", "Peer Mehal", "Kamalia"],
//   },
//   {
//     name: "Karachi",
//     tehsils: ["Malir", "North Karachi", "East karachi"],
//   },
// ];
// let allTehsils = [];
// let iTehsils = [];

// for (const i of districts) {
//   allTehsils.push(...i.tehsils);
// }
// for (const j of allTehsils) {
//   for (const i of j) {
//     iTehsils.push(i);
//   }
// }
// console.log(allTehsils);
// console.log(allTehsils);

let names = [];

function addUser() {
  let newName = prompt("enter name");
  if (countNameNumber(names, newName) >= 2) {
    alert("name already present two times");
  } else {
    names.push(newName);
  }
}
function countNameNumber(names, newnames) {
  let count = 0;
  for (let i = 0; i < names.length; i++) {
    if (names[i] == newnames) {
      count++;
    }
    return count;
  }
}

// let names = [];
// function addUser() {
//   let newName = prompt("Enter name");
//   if (countOccurrences(names, newName) >= 2) {
//     alert("Name already present two times");
//   } else {
//     names.push(newName);
//   }
// }

// function countOccurrences(arr, val) {
//   return arr.reduce((a, b) => (b === val ? a + 1 : a), 0);
// }

// let names = [];
// function addUser() {
//   let newName = prompt("Enter name");
//   if (names.length >= 1) {
//     if (checkName(newName) == false) {
//       names.push(newName);
//     } else {
//       alert("Name already present two times in a row");
//     }
//     function checkName(newName) {
//       for (let i = 0; i < names.length; i++) {
//         if (newName == names[i]) {
//           return false;
//         }
//         return true;
//       }
//     }
//   } else {
//     names.push(newName);
//   }
// }
