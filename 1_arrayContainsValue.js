var arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var num = prompt('Enter The Number To Search');
if (arr2.includes(Number(num))) {
  console.log(num + ' is exist in the array');
} else {
  console.log(num + ' does not exist in the array');
}
