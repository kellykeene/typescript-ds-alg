import { charOccurrenceMap } from "./CharOccurrenceMap";

// Given a string, return the character that occurs the max number of times.
export default function maxChar(str: string) {
    const charMap = charOccurrenceMap(str);

    let max = 0; // Track the max occurrence
    let maxChar = ""; // Track the max char

    for (let key in charMap) {
        if (charMap[key] > max) {
            // reset max
            max = charMap[key];
            maxChar = key;
        }
    }

    return maxChar;
}
