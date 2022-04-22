var maxSubArray = function (nums) {
  let currSum = nums[0];
  let maxSum = currSum;

  for (let i = 0; i < nums.length; i++) {
    currSum = nums[i];
    if (currSum > maxSum) {
      maxSum = currSum;
    }
    for (let j = i + 1; j < nums.length; j++) {
      currSum = currSum + nums[j];
      if (currSum > maxSum) {
        maxSum = currSum;
      }
    }
  }

  return maxSum;
};

var arr = [2, 4, 5, 7, 12, 3, 1, 11, 13, 11, 15, 12];
console.log(maxSubArray(arr));
