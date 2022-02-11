// Creating a Stack
var st = [];

function isPalindrome(s) {
  var length = s.length;
  // Creating a Stack
  var st = [];
  var i,
    mid = parseInt(length / 2);

  for (i = 0; i < mid; i++) {
    st.push(s[i]);
  }
  if (length % 2 != 0) {
    i++;
  }
  var ele;
  while (i != s.length) {
    ele = st[st.length - 1];
    st.pop();

    if (ele != s[i]) return false;
    i++;
  }

  return true;
}

var n = prompt('Enter The No To Check Palindrome');
if (isPalindrome(n)) {
  console.log(n + ' is a Palindrome Number');
} else {
  console.log(n + ' is a Not Palindrome Number');
}
