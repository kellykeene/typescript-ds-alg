/** Pair class to store key-value pairs */
class Pair {
  /**
   * @param {number} key The key to be stored in the pair
   * @param {string} value The value to be stored in the pair
   */
  constructor(key, value) {
      this.key = key;
      this.value = value;
  }
}

class Solution {
  /**
   * @param {Pair[]} pairs
   * @returns {Pair[]}
   */
    mergeSort(pairs) {

      console.log(`mergeSort: ${JSON.stringify(pairs)}`);

      if (pairs.length <= 1) {
        return pairs;
      }

      // divide the array in half
      const mid = Math.floor(pairs.length / 2);
      const left = pairs.slice(0, mid);
      const right = pairs.slice(mid);

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
      if (left[leftIndex].key <= right[rightIndex].key) { // <= (equal) will keep duplicates in check and make this implementation stable
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
const sorted = solution.mergeSort([new Pair(5, "apple"), new Pair(2, "banana"), new Pair(9, "cherry"), new Pair(1, "date"), new Pair(9, "elderberry")]);
console.log(sorted);