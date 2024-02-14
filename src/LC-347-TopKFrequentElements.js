/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * Constraints:
 * 
 * 1 <= nums.length <= 105
 * -104 <= nums[i] <= 104
 * k is in the range [1, the number of unique elements in the array].
 * It is guaranteed that the answer is unique.
 * 
 * Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
 * 
 * 
 * [1,1,1,2,2,2,3,3]  k=2
 * [1,2] top two frequent values
 * 
 * Time Complexity: O(n)
 * 
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {

  let frequencyMap = new Map();
  let frequencyArr = new Array(nums.length);
  let result = [];

  //console.log(`nums array: ${JSON.stringify(nums)}`);

  // build a frequency map that uses the number as the key and the frequency of that number as the value
  // example: [1,1,1,2,2,2,3,3] => { (1: 3), (2: 3), (3: 2) }
  for (let i = 0; i < nums.length; i++) {
    // console.log(`analyzing num[i]: ${nums[i]}`);
    frequencyMap.set(nums[i], (frequencyMap.get(nums[i]) || 0) + 1);
  }

  // build an array that holds a set of numbers that occur x times where x maps to the index of the array
  frequencyMap.forEach((val, key) => {
  //   console.log(`val (the frequency) = ${val} and key (the number) = ${key}`);
    if (frequencyArr[val]) {
      frequencyArr[val].add(key);
    } else {
      frequencyArr[val] = (new Set()).add(key);
    }
  });

  //console.log(`frequency array: ${JSON.stringify(frequencyArr)}`);

  for (let i = frequencyArr.length-1; i >= 0; i--) {
    if (frequencyArr[i]) {
      result.push(...frequencyArr[i]);
    }
    if (result.length === k) {
      break;
    }
  }

  return result;
};

console.log(topKFrequent([1,1,1,2,2,3,3,4], 3));