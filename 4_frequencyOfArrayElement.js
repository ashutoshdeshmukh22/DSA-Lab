var arr = [1, 2, 2, 2, 3, 5, 7, 7, 9, 2, 3, 2];
var count = 0;
var no = prompt('Enter The Element Which Frequency To Check');
for (let i = 0; i <= arr.length - 1; i++) {
  if (arr[i] == no) {
    count++;
  }
}
console.log('The Entered Element ' + no + ' Has Occured ' + count + ' Times');
