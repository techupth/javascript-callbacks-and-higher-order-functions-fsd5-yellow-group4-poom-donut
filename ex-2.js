//Exercise #2: At Least Five Function
function atLeastFive(array, operation) {
// Start coding here
let scoresResult = 0;
  for (let scoresRoom of array) {
    if (operation(scoresRoom)) {
      scoresResult += 1
    } 
  }
  return scoresResult >= 5
}
function checkScores (scores) {
  return scores >= 70
  }
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];
// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive (studentScoresRoom1,checkScores) ;
let scoreRoom2Result = atLeastFive (studentScoresRoom2,checkScores);
let scoreRoom3Result = atLeastFive (studentScoresRoom3,checkScores);
console.log (scoreRoom1Result)
console.log (scoreRoom2Result)
console.log (scoreRoom3Result)