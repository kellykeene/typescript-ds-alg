import { charOccurrenceMap } from "../src/CharOccurrenceMap";

test("Char map for 'abcABC' should equal {a: 1, b: 1, c: 1, A: 1, B: 1, C:1}", () => {
    const str = "abcABC";
    const map = charOccurrenceMap(str);
    expect(map).toEqual({ a: 1, b: 1, c: 1, A: 1, B: 1, C: 1 });
});

test("Char map for 'aabbkelly' should equal {a: 2, b: 2, k: 1, e: 1, l: 2, y:1}", () => {
    const str = "aabbkelly";
    const map = charOccurrenceMap(str);
    expect(map).toEqual({ a: 2, b: 2, k: 1, e: 1, l: 2, y: 1 });
});
