// Function to check if we can reach last index or not
function jumpGame(arr, n) {
  var max_index = 0; // Pointer pointing to to maximum index we can jump using the first i elements of the array
  for (var i = 0; i < n && i <= max_index; i++) {
    max_index = Math.max(max_index, i + arr[i]);
  }
  if (max_index >= n - 1) {
    // Checking if we reached last index or not.
    console.log('True');
  } else {
    console.log('False');
  }
  return;
}

var n = 6;
var arr = [3, 2, 5, 8, 9, 7, 7, 9, 3];
jumpGame(arr, n);
