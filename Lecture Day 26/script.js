// let x = multiply(arr);
// console.log(x)
// function multiply(...num){
    
    // let arr = [1, 2, 3, 4, 5, 6, 7,2];
    // let total = 1;
    // for(let i of arr){
    //     total *=    i;
    // }
    // console.log(total)
//     console.log(arr)
//     // return total;
    
    
// }




let students = [
  {
    name: "ali",
    subjects: ["english", "chemistry", "physics"],
  },
  {
    name: "rameez",
    subjects: ["PStudies", "english", "maths"],
  },
  {
    name: "aqsa",
    subjects: ["biology", "zoology", "chemistry"],
  },
];
function removeSubject() {
      let studentname = prompt("Enter the students name");
      let studentMilgya = students.find(function (student) {
        if (student.name == studentname) {
          return true;
        }
      });
      if (studentMilgya) {
        let newSubject = prompt("enter the subject");
        let index = studentMilgya.subjects.indexOf(newSubject);
        studentMilgya.subjects.splice(index,1);   
    }
    }

// function addSubject(){

//     let studenName = prompt("student name btyen");
//     let studentMilgya = students.find(function(student){
//         if(student.name == studenName){
//             return true;
//         }
//     })
//     if(studentMilgya){
//         let newSubject = prompt("enter new subject");
//         studentMilgya.subjects.push(newSubject);
//     }else{
//             alert("student nahi mila");
//     }

// }

// let aa = getStudentsQty('english');
// console.log(aa);

// function getStudentsQty(subject){

//     let counter = 0;

//     for(let student of students){
//         if(student.subjects.includes(subject) == false){
//             counter++;
//         }
//     }

//     return counter;

//     }

// function getStudens(subject){

//     let fStudents = [];

//     for(let student of students){
//         if(student.subjects.includes(subject) == true){
//             fStudents.push(student.name);
//         }
//     }

//     return fStudents;

// }

// let districts = [
//     {
//         name:'Faisalabad',
//         tehsils:['FSD City', 'jaranwala', 'jhumra']
//     },
//     {
//         name:'TOba',
//         tehsils:['Toba City', 'Peer Mehal', 'Kamalia']
//     },
//     {
//         name:'Karachi',
//         tehsils:['Malir', 'North Karachi', 'East karachi']
//     }
// ];

// function getTehsilName(pdistrict){

//     for(let district of districts){
//         if(district.name == pdistrict){
//             return district.tehsils.reverse()[0];
//             // return district.tehsils[district.tehsils.length-1]
//         }
//     }

// }

//districts ki filtering

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
// let a = lastTehsil("Faisalabad");
// console.log(a);
// function lastTehsil(citytkaname) {
//   for (const district of districts) {
//     if (district.name == citytkaname) {
//     //   let newthsil = district.tehsils.reverse();
//     //   return newthsil[0];
//     return district.tehsils[district.tehsils.length-1]
//     }
//   }
// }

//    let districtName =  getDistrict('jaranwala');
//    console.log(districtName);

// function getDistrict(tehsilKaName){
//     for(let district of districts){
//         if(district.tehsils.includes(tehsilKaName)){
//             return district.name;
//         }
// }
