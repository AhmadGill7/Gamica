/* <script> */
// break ka word loop ko cancel krta h
// do-while
// while
// for-counting wala loop
// for-in wala loop
// for-of wala loop

// let englishKayVowels = "aeiou";

// let vowelNahiAya =  true;

// while(vowelNahiAya){

//   let ch =  prompt("enter vowel");

//   if(englishKayVowels.includes(ch)){
//     vowelNahiAya = false;
//   //  break;
//   }

// }

// while loop

// let counter = 0;

// while(counter <= 10){

//   console.log("print hogya " + counter)
//   // counter++;
//   counter = counter+1

// }

// for-couting wala loop
// jab aapko exact numbe of repeat maloom ho

// console.log('apple')

// </script>

// let Vowels = "aeiou";
// let vowelNahiAya = true;
// let correctVovel = "i";
// while (vowelNahiAya) {
//   let ch = prompt("enter a vowel");

//   if (Vowels.includes(ch)) {
//     if (ch === correctVovel) {
//       alert("you wrote the correct vovel");
//       break;
//     } else {
//       alert("enter the vovel again");
//     }
//   }
// }

// let num = prompt("enter a number from 0 to 100");
// let correctnum = 20;
// let numNotDef = true;
// while (numNotDef) {
//   if (num == correctnum) {
//     alert("you wrote the correct number");
//     break;
//   } else {
//     num = prompt("enter the num again");
//   }
// }

function userInputTable() {
  maketable(+prompt("enter the Number"));
}
userInputTable()

function maketable(a1) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${a1} x ${i} = ${a1 * i}`);
  }
}
