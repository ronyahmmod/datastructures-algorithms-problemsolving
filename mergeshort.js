// merge sorted arrays
// INPUTS: [0,3,4,31], [4,6,30]
// OUTPUTS: [0,3,4,4,6,30,31]

// MAIN GOAL: Time Complexity
// Brute force approach
// VARIABLES: mergedArray, array1Item, array2Item, i, j
// 1. Check 2 inputs are not empty
// 2. if array1 elements is empty return array2
// 3. if array2 elements is empty return array1
// 4. loop through 5 to 12 while array1Item || array2Item
// 5. CHECK: array2Item  empty or array1Item < array2Item
// 6. TRUE: mergedArray push array1Item
// 7. Update array1Item
// 8. Increase i to 1
// 9. else
// 10. mergedArray push array2Item
// 11. update array2Item
// 12. Increase j to 1
// 13. return mergedArray

function mergeShortedArrays(array1, array2) {
  if (!array1 && !array2) {
    console.log("Two arrays are empty or bad inputs");
    return [];
  }
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  const mergedArray = [];
  let i = 1;
  let j = 1;
  let array1Item = array1[0];
  let array2Item = array2[0];

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergedArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }
  return mergedArray;
}

const mergeShortedArray = mergeShortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(mergeShortedArray);
