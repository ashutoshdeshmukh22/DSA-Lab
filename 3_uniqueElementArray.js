function toUniqueArray(a) {
  var newArr = [];
  for (var i = 0; i < a.length; i++) {
    if (newArr.indexOf(a[i]) === -1) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}
var array = ['red', 'red', 'green', 'green', 'green'];
var uniqueitems = toUniqueArray(array);
console.log(uniqueitems);
