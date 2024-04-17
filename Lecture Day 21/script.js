// let a = "america";
// console.log("a =", a);


// let charAtr = a.charAt(3);
// console.log("the forth char is '", charAtr, "'");

// let farlseEndswith = a.endsWith("f");
// console.log("does the var a ends with f :", farlseEndswith);

// let trueEndswith = a.endsWith("a");
// console.log("does the var a ends with a :", trueEndswith);
// // a.startsWith("a");
// // a.startsWith("d");
// let repetedA = a.repeat(2);
// console.log("the repeated a is =", repetedA);


// let str = "this is a some Dish";
// console.log("the real string is =", str);


// let replacedStr = str.replace(" some", "");
// console.log("the replaced str is =", replacedStr);


// let slicedstr = replacedStr.slice(0, 7);
// console.log("The sliced str is =", slicedstr);


// let str2 = " 'i have a space in start and end' ";
// console.log("the second string is =", str2);


// let trimedstr2 = str2.trim();
// console.log("we have trimmed the str2 and get the result of =", trimedstr2);


// let spliteStr2 = trimedstr2.split(" ");
// console.log("the slpit str2 is =", spliteStr2);

// // the code
// let userDish = prompt("Enter your fav Dish");
// let para =
//   "• I have always been fan of Dish Though Dish is not a local dish but Dish has gained so much popularity in here too.";
// let output = para.replaceAll("Dish", userDish);
// console.log(output);

// // let userDish = prompt("Enter your fav Dish");
// // let para1 = "• I have always been fan of Dish";
// // let para2 = "Though Dish is not a local dish but,"
// // let para3 = "Dish has gained so much popularity in here too."
// // let outputpara1 = para1.replace("Dish", userDish);
// // let outputpara2 = para2.replace("Dish", userDish);
// // let outputpara3 = para3.replace("Dish", userDish);
// // console.log(outputpara1, outputpara2, outputpara3);



let vowels = 'aeiou';
  let city = 'Faisalabad';
  // if(ch == 'a' || ch == 'i' || ch == 'o' || ch == 'e' || ch == 'u'){

  for (let i = 0; i < city.length; i++) {

    let ch = city[i];

    if (!vowels.includes(ch)) {
      console.log(ch + ' vowel nahi tha');
    }
  }