// Exercise #1: For Each Function
function forEach(array, operation) {
// Start coding here
  for (let Salaries of array) {
    newEmployeeSalaries.push(operation(Salaries))
  }
}
const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];
// Using `forEach` function here
forEach (employeeSalaries , (newSalaries) => newSalaries + 5000)
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
