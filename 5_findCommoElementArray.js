function getCommon(arr1, arr2) {
  var common = [];

  for (var i = 0; i < arr1.length; ++i) {
    for (var j = 0; j < arr2.length; ++j) {
      if (arr1[i] == arr2[j]) {
        // If element is in both the arrays
        common.push(arr1[i]); // Push to common array
      }
    }
  }

  return common;
}

var arr1 = [45, 99, 55, 223, 7];
var arr2 = [45, 18, 93, 7, 223];

var commonElements = getCommon(arr1, arr2);

console.log(commonElements);
