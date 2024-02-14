/**
 * 
 *  https://leetcode.com/problems/group-anagrams/
 *
 *  Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 *  An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once. 
 * 
 *  Example 1:
 * 
 *  Input: strs = ["eat","tea","tan","ate","nat","bat"]
 *  Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 *  Example 2:
 * 
 *  Input: strs = [""]
 *  Output: [[""]]
 * 
 *  Example 3:
 * 
 *  Input: strs = ["a"]
 *  Output: [["a"]]
 * 
 *  Constraints:
 * 
 *  1 <= strs.length <= 104
 *  0 <= strs[i].length <= 100
 *  strs[i] consists of lowercase English letters.
 * 
 * 
 * 
 * Brute Force is O(m * n log n)
 * for each element in array - m
 * we have to sort the word in order to get a hashmap key - n log n
 * 
 * We can do better using the hashmap to track character counts
 * O(m * n)
 * 
 */

/**
 * @param {string} s
 * @return {string}
 */
var getSignature = function(s) {
  const count = Array(26).fill(0);
  for (const c of s) {
      //console.log("c.charCodeAt(0) for " + c + ": " + c.charCodeAt(0));
      count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const result = [];
  for (let i = 0; i < 26; i++) {
      if (count[i] !== 0) {
          result.push(String.fromCharCode(i + 'a'.charCodeAt(0)), count[i].toString());
      }
  }

  return result.join('');
};

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    
  let hashmap = new Map();

  //console.log("Input: " + JSON.stringify(strs));

  for (let word of strs) {
    
    //console.log("word: " + JSON.stringify(word));

    let sig = getSignature(word);
    if (hashmap.has(sig)) {
      let groupArr = hashmap.get(sig);
      groupArr.push(word);
      hashmap.set(sig, groupArr);
    } else {
      hashmap.set(sig, [word]);
    }

    //console.log("hashmap[" + sig + "]: " + JSON.stringify(hashmap.get(sig)));
  }

  //console.log("hashmap: " + JSON.stringify(hashmap));

  let resultingArr = [];
  hashmap.forEach(val => resultingArr.push(val));

  return resultingArr;
};

const sortChars = (str) => {
  return str.split("").sort().join("");
};

const arr = groupAnagrams(["eat","tea","tan","ate","nat","bat"]);
console.log(arr);

