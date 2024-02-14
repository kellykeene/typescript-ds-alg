/**
  https://leetcode.com/problems/sort-an-array/description/

  Given an array of integers nums, sort the array in ascending order and return it.

  You must solve the problem without using any built-in functions in O(nlog(n)) time complexity and with the smallest space complexity possible.

  Example 1:

  Input: nums = [5,2,3,1]
  Output: [1,2,3,5]
  Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
  
  Example 2:

  Input: nums = [5,1,1,2,0,0]
  Output: [0,0,1,1,2,5]
  Explanation: Note that the values of nums are not necessairly unique.
  
  Constraints:

  1 <= nums.length <= 5 * 104
  -5 * 104 <= nums[i] <= 5 * 104
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortArray = function(nums) {
  return mergeSort(nums);
};

const mergeSort = function(arr) {

  //console.log(`mergeSort: ${JSON.stringify(arr)}`);

  if (arr.length <= 1) {
    return arr;
  }

  // divide the array in half
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  //console.log(`mid: ${mid}, left: ${JSON.stringify(left)}, right: ${JSON.stringify(right)}`);

  // recursively (divide and conquer) each half and merge together while sorting
  return merge(mergeSort(left), mergeSort(right));
}

const merge = function(left, right) {
  
  //console.log(`merge left: (${JSON.stringify(left)}, right: ${JSON.stringify(right)})`);

  let merged = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) { // <= (equal) will keep duplicates in check and make this implementation stable
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex <= left.length-1) {
    merged.push(...left.slice(leftIndex));
  }

  if (rightIndex <= right.length-1) {
    merged.push(...right.slice(rightIndex));
  }

  //console.log(`merged array: ${JSON.stringify(merged)}`);

  return merged;
}

console.log(sortArray([2,1]));
console.log(sortArray([2,1,11,45,3,8,7,5,98,56]));
console.log(sortArray([2]));
console.log(sortArray([]));
console.log(sortArray([4,-22,55,987,2,-4,0]));