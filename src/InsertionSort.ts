// O(n^2)
// Always start with the SECOND element and compare to the element BEFORE it
// If less than the element before it, swap the elements
export function insertionSort(arr: number[]) {
    if (arr.length === 1) return arr;

    let temp = -1;
    // ALWAYS Start with the SECOND element in the array (i = 1)
    // [3, 2, 4, 1, 5, 6]
    // ----|-------------|-----|--------|------------|------------------------------
    //  i  | arr[i]/temp |  j  | arr[j] | arr[j + 1] | array              | swap?
    // ----|-------------|-----|--------|------------|------------------------------
    //  1  |      2      |  0  |    3   |     3      | [3, 2, 4, 1, 5, 6] |
    //  1  |      2      |  0  |    3   |     6      | [3, 2, 4, 1, 5, 6] |

    for (let i = 1; i < arr.length; i++) {
        temp = arr[i]; // track the value we started with
        for (var j = i - 1; arr[j] > temp && j > -1; j--) {
            // j will be the previous element (i - 1)
            // keep iterating backwards while arr[i] (temp) is less than arr[j]
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }

    return arr;
}
