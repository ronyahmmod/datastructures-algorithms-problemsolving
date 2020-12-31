// TWO SUM
// INPUTS: One Array Of Integers [nums], integer[target]
// OUTPUT: return indices of the two numbers such that they add up to target

// STEPS
// 1. Check input array is empty
//   i) True: return array with Error message and error code 0
//  ii) false: continue execution
// 2. LOOP: arrays 0th element to last element on step-5
// 3. SUM 1st index element + last index element
// 4. CHECK: if sum === target  return [1st index, last index]
// 5. increase 1st index to 1 and secondIndex = firstIndex + 1

function twoSum(nums, target) {
  if (!nums) return ["There is no input arrays", 0];
  let firstIndex = 0;
  let secondIndex = firstIndex + 1;

  for (let i = 0; i < nums.length; i++) {
    if (i === nums.length - 1) secondIndex = 0;
    if (nums[firstIndex] + nums[secondIndex] === target)
      return [firstIndex, secondIndex];
    firstIndex++;
    secondIndex = firstIndex + 1;
  }
  return ["Nothing found", 1];
}

const result = twoSum([4, 8, 9], 13);
console.log(result);

// O(n) time complexity
//
