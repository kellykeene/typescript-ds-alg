import {
    bubbleSortBruteForce,
    bubbleSortUnoptimized,
    bubbleSortES2015,
    bubbleSortNoSwaps,
    bubbleSortAnotherWay,
} from "../src/BubbleSort";

test("bubbleSortBruteForce", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    bubbleSortBruteForce(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("bubbleSortUnoptimized", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    bubbleSortUnoptimized(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("bubbleSortES2015", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    bubbleSortES2015(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("bubbleSortNoSwaps", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];
    bubbleSortNoSwaps(arr);
    expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

test("bubbleSortAnotherWay", function () {
    const arr = [
        2183, 17358, 46676, 68027, 90467, 101257, 119637, 128114, 149770,
    ];
    bubbleSortAnotherWay(arr);
    expect(arr).toEqual([
        2183, 17358, 46676, 68027, 90467, 101257, 119637, 128114, 149770,
    ]);
});
