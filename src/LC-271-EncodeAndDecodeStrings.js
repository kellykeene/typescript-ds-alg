/**
 * https://leetcode.com/problems/encode-and-decode-strings/description/
 * Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.
 * 
 * Machine 1 (sender) has the function:
 * 
 * string encode(vector<string> strs) {
 *  // ... your code
 *  return encoded_string;
 * }
 * 
 * Machine 2 (receiver) has the function:
 * 
 * vector<string> decode(string s) {
 *  //... your code
 *  return strs;
 * }
 * 
 * So Machine 1 does:
 * 
 * string encoded_string = encode(strs);
 * 
 * and Machine 2 does:
 * 
 * vector<string> strs2 = decode(encoded_string);
 * strs2 in Machine 2 should be the same as strs in Machine 1.
 * 
 * Implement the encode and decode methods.
 * 
 * You are not allowed to solve the problem using any serialize methods (such as eval).
 * 
 * Example 1:
 * 
 * Input: dummy_input = ["Hello","World"]
 * Output: ["Hello","World"]
 * 
 * Explanation:
 * Machine 1:
 * Codec encoder = new Codec();
 * String msg = encoder.encode(strs);
 * Machine 1 ---msg---> Machine 2
 * 
 * Machine 2:
 * Codec decoder = new Codec();
 * String[] strs = decoder.decode(msg);
 * 
 * Example 2:
 * 
 * Input: dummy_input = [""]
 * Output: [""]
 * 
 * Constraints:
 * 
 * 1 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] contains any possible characters out of 256 valid ASCII characters.
 * 
 * Follow up: Could you write a generalized algorithm to work on any possible set of characters?
 * 
 * Time complexity: O(n)
 * Space complexity: O(k)
 * 
 */

// var encode = function(strs) {
//   return strs.join(String.fromCharCode(257));
// };

// var decode = function(s) {
//   return s.split(String.fromCharCode(257));
// };

/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
const encode = function(strs) {
  let encoded = "";
  
  for (let str of strs) {
    // add the length of the substring in bits + the substring
    // ["some", "sub", "strings"] => 00000100some00000011sub00000111strings
    encoded += str.length.toString(2).padStart(8, '0') + str;
  }

  return encoded;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
const decode = function(s) {
    let substrings = [];
    
    // 00000100some00000011sub00000111strings
    for (let i = 0, bitLength, strLength; i < s.length; i = bitLength + strLength) {
      bitLength = i + 8;
      let binaryCount = s.slice(i, bitLength);
      strLength = parseInt(binaryCount, 2);
      let substr = s.slice(bitLength, bitLength + strLength);
      substrings.push(substr);
    }

    return substrings;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */

const encoded = encode(["some", "sub", "strings", "monkeycatsgalore"]);
console.log(encoded);
console.log(decode(encoded));
