import { insertionSort } from "../src/InsertionSort";

test("Insertion Sort", function () {
    const arr = [4, 10, 9, 6, 3, 7, 1, 8, 5, 2];
    insertionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    const arr2 = [3, 2, 4, 1, 5, 6];
    insertionSort(arr2);
    expect(arr2).toEqual([1, 2, 3, 4, 5, 6]);
});
