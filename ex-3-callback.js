// Exercise #2: At Least Five Function
function atLeastFive(array, operation) {
  // Start coding here
  let result = 0; // สร้างตัวแปรเก็บค่า เป็ร number
  for (let i = 0; i < array.length; i++) {
    if (operation(array[i])) {
      // ไปทำงานใน callback ก็คือฟังก์ชัน checkScores
      result++; // เก็บค่า true
    }
  }
  return result >= 5; // รีเทิร์นค่าออกมาเป็นค่า boolean โดยการเปลียบเทียบว่ามากกว่าหรือเท่ากับ 5 หรือไม่ ถ้ามากกว่าจะได้เป็นค่า true
}
function checkScores(scores) {
  return scores >= 70; // รีเทิร์นค่าออกมาเป็นค่า boolean โดยการเปลียบเทียบว่ามากกว่าหรือเท่ากับ 70 หรือไม่ ถ้ามากกว่าจะได้เป็นค่า true
}

const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

// Using `atLeastFive` function here

let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkScores);
let scoreRoom2Result = atLeastFive(studentScoresRoom1, checkScores);
let scoreRoom3Result = atLeastFive(studentScoresRoom1, checkScores);

console.log(scoreRoom1Result);
console.log(scoreRoom2Result);
console.log(scoreRoom3Result);
