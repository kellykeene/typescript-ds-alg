export function charOccurrenceMap(str: string) {
    let charMap: { [key: string]: number } = {};

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    console.log(charMap);
    return charMap;
}
