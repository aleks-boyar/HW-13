
// Task #1
// function getFactorial (n) {
//    if(n === 1 || n === 0) {
//       return 1;
//    } else {
//       return n * getFactorial(n - 1);
//    }
// }
// console.log(getFactorial(3));

// Task #2

function pow(num, degree) {
   if (degree === 1) {
      return num;
   } else {
      return num * pow(num, degree - 1);
   }
}
console.log(pow(3, 3));

