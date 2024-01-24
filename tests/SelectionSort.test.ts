import { selectionSort } from "../src/SelectionSort";

test("Selection Sort", function () {
    const arr = [4, 2, 6, 5, 1, 3];
    selectionSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});
