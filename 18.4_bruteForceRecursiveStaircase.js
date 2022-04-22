const recursiveStaircase = (num = 10) => {
  if (num <= 0) {
    return 0;
  }
  const steps = [1, 2];
  if (num <= 2) {
    return steps[num - 1];
  }
  for (let currentStep = 3; currentStep <= num; currentStep += 1) {
    [steps[0], steps[1]] = [steps[1], steps[0] + steps[1]];
  }
  return steps[1];
};
console.log(recursiveStaircase());
console.log(recursiveStaircase(4));
console.log(recursiveStaircase(8));
