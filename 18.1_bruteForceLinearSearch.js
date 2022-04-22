// Brutefroce - Linear Search
class search {
  linear_search(arr, key) {
    var len = arr.length;
    var flag = 0;
    for (var i = 0; i < len; i++) {
      if (arr[i] == key) {
        console.log('Element found!');
        flag = 1;
        break;
      }
    }
    if (flag == 0) console.log('Element not found!');
  }
}

// Execute Linear search
var s = new search();
var arr = [1, 3, 5, 7, 8, 9];
var key = 7;
s.linear_search(arr, key);
