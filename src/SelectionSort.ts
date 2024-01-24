// O(n^2)
// Walk through and track the index with the smallest value
function swap(arr: number[], idx: number, minIdx: number) {
    const temp = arr[idx];
    arr[idx] = arr[minIdx];
    arr[minIdx] = temp;
}

export function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        // Track the index of the LOWEST value
        let minIdx = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        if (i !== minIdx) {
            swap(arr, i, minIdx);
        }
    }
    return arr;
}
