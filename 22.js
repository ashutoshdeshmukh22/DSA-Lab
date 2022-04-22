function myFunction() {
  // input string
  var str = 'Visit me in college!';
  // searching string with modifier i
  var n = str.search(/me in college/i);
  console.log(n + ' ');
  // searching string without modifier i
  var n = str.search(/me in college/);
  console.log(n);
}
myFunction();
