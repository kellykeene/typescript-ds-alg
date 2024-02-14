//  Merge Sort
//  O(n log n) in the worst, average and best case scenarios
//
//      [4,3,7]              [9,1,2,8]
//    [4]     [3,7]        [9,1]    [2,8]
//  [4] [3]  [7] [9]      [9] [1]  [2] [8]
class MergeSort {
  /**
   * @param {number[]} arr
   * @returns {number[]}
   */
  mergeSort(arr) {

    console.log(`mergeSort: ${JSON.stringify(arr)}`);

    if (arr.length <= 1) {
      return arr;
    }

    // divide the array in half
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    console.log(`mid: ${mid}, left: ${JSON.stringify(left)}, right: ${JSON.stringify(right)}`);

    // recursively (divide and conquer) each half and merge together while sorting
    return this.merge(this.mergeSort(left), this.mergeSort(right));
  }

  merge(left, right) {
    
    console.log(`merge left: (${JSON.stringify(left)}, right: ${JSON.stringify(right)})`);

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

    console.log(`merged array: ${JSON.stringify(merged)}`);

    return merged;
  }
}

const solution = new Solution();
const sorted = solution.mergeSort([4,3,7,4,9,1,2,8]);
console.log(sorted);