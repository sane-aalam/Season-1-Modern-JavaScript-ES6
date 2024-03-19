// EP1 - Discuss about the spread operator and Rest Operator

// Normal way
function addIntegerValue(a, b, c, d) {
  return a + b + c;
}

let a = 1;
let b = 2;
let c = 5;
let d = 10;

console.log(addIntegerValue(a, b, c, d));

// Topic-1 Rest Operator
// 1. (...multiple pass)
// 2. simple,clear,sort-code
// 3. easy to understand (use array and object destructuring javascript)
// 4. use react js

function addNumber(value1, value2, value3, ...otherValue) {
  // console.log(otherValue); [14, 15, 16]
  let [num1, num2, num3] = otherValue;
  let sum = value1 + value2 + value3 + num1 + num2 + num3;
  return sum;
}

let integerAray = [11, 12, 13, 14, 15, 16];
let totalSum = addNumber(
  integerAray[0],
  integerAray[1],
  integerAray[2],
  integerAray[3],
  integerAray[4],
  integerAray[5]
);
console.log(totalSum);

//-------------------Array Destucting Clear Explained---------------

let names = ["Non-Integer", "Integer-1", "Integer-2"];
let ages = [11, 13, 14];

// want to combine both using (...)
let combineArray = [...names, ...ages];
console.log(combineArray);

let studentDetails = ["Sane Aalam", 11, "Rampur", "36361"];
// use in react js most [Hooks] - usestate
// const [currentState, updateState] = useState(0)

let [studentName, StudentAge, StudentAdress, StudentPin] = studentDetails;
console.log(studentName);
console.log(StudentAge);
console.log(StudentAdress);
console.log(StudentPin);


//-------------------object Destucting Clear Explained---------------


let ClassRoomMangement = {
    studentName : "Ronak sir",
    studentId : 1818191,
    studentPhone : 91771719191,
    studentCourseName : "BTech",
    studentSkills : "Web Development"
}

let newClassRoomMangement = {
    ...ClassRoomMangement,
}

console.log(newClassRoomMangement);