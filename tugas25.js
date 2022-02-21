function isGreater(element) {
  return (element >= 10);
}
var nilai = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];
console.log(nilai);
nilai = nilai.sort();
console.log(nilai);
var result = nilai.reverse();
console.log(result);
var numbers = nilai.filter(isGreater);
console.log(numbers);