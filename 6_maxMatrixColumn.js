var arr = new Array();
for (let i = 0; i < 2; i++) {
  arr[i] = new Array();
  for (let j = 0; j < 2; j++) {
    arr[i][j] = Number(prompt('Enter Number'));
  }
}
var max = arr[0][0];
var min = arr[0][0];
for (var i = 0; i < 2; i++) {
  for (var j = 0; j < 2; j++) {
    if (arr[i][j] > max) {
      max = arr[i][j];
    }
    if (arr[i][j] < min) {
      min = arr[i][j];
    }
  }
}
document.write(arr);
document.write('<br>Max value in matrix is - ' + max);
document.write('<br>Min value in matrix is - ' + min);

// function largestInColumn(cols, arr) {
//   for (let i = 0; i < cols; i++) {
//     let maxm = arr[0][i];
//     for (let j = 1; j < arr[i].length; j++)
//       if (arr[j][i] > maxm) maxm = arr[j][i];
//     console.log(maxm);
//   }
// }
// let arr = [
//   [3, 4, 87],
//   [1, 4, 21],
//   [76, 11, 1],
// ];
// largestInColumn(3, arr);
