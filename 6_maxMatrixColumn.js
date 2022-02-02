function largestInColumn(cols, arr) {
  for (let i = 0; i < cols; i++) {
    let maxm = arr[0][i];
    for (let j = 1; j < arr[i].length; j++)
      if (arr[j][i] > maxm) maxm = arr[j][i];
    console.log(maxm);
  }
}
let arr = [
  [3, 4, 87],
  [1, 4, 21],
  [76, 11, 1],
];
largestInColumn(3, arr);
