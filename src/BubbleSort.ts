// O(n^2)
export function bubbleSortBruteForce(arr: number[]): void {
    // [ 3, 420, 4, 69, 7, 9, 42 ]
    //  i , j   a[i]  a[j]  a[j+1]    arr.length  (arr.length - 1 - i)   array
    // -------|------|-----|--------|------------|---------------------|------------------------------
    //  0, 0  |  3   |  3  |  420   |     7      |   7 - 1 - 0 = 6     | [ 3, 420, 4, 69, 7, 9, 42 ]
    //  0, 1  |  3   | 420 |   4    |     7      |   7 - 1 - 0 = 6     | [ 3, 4, 420, 69, 7, 9, 42 ] SWAP
    //  0, 2  |  3   | 420 |   69   |     7      |   7 - 1 - 0 = 6     | [ 3, 4, 69, 420, 7, 9, 42 ] SWAP
    //  0, 3  |  3   | 420 |   7    |     7      |   7 - 1 - 0 = 6     | [ 3, 4, 69, 7, 420, 9, 42 ] SWAP
    //  0, 4  |  3   | 420 |   9    |     7      |   7 - 1 - 0 = 6     | [ 3, 4, 69, 7, 9, 420, 42 ] SWAP
    //  0, 5  |  3   | 420 |   42   |     7      |   7 - 1 - 0 = 6     | [ 3, 4, 69, 7, 9, 42, 420 ] SWAP
    // -------|------|-----|--------|------------|---------------------|------------------------------
    //  1, 1  |  4   |  4  |   69   |     7      |   7 - 1 - 1 = 5     | [ 3, 4, 69, 7, 9, 42, 420 ]
    //  1, 2  |  4   |  69 |   7    |     7      |   7 - 1 - 1 = 5     | [ 3, 4, 7, 69, 9, 42, 420 ] SWAP
    //  1, 3  |  4   |  69 |   9    |     7      |   7 - 1 - 1 = 5     | [ 3, 4, 7, 9, 69, 42, 420 ] SWAP
    //  1, 4  |  4   |  69 |   42   |     7      |   7 - 1 - 1 = 5     | [ 3, 4, 7, 9, 42, 69, 420 ] SWAP
    // -------|------|-----|--------|------------|---------------------|------------------------------
    //  2, 2  |  7   |  7  |   9    |     7      |   7 - 1 - 2 = 4     | [ 3, 4, 7, 9, 42, 69, 420 ]
    //  2, 3  |  7   |  9  |   42   |     7      |   7 - 1 - 2 = 4     | [ 3, 4, 7, 9, 42, 69, 420 ] SORTED!

    // O(n^2)
    for (let i = 0; i < arr.length; ++i) {
        for (let j = 0; j < arr.length - 1 - i; ++j) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// UNOPTIMIZED VERSION OF BUBBLE SORT
export function bubbleSortUnoptimized(arr: number[]) {
    for (var i = arr.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// ES2015 Version
export function bubbleSortES2015(arr: number[]) {
    const swap = (arr: number[], idx1: number, idx2: number) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    };

    for (let i = arr.length; i > 0; i--) {
        for (let j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    return arr;
}

// Optimized BubbleSort with noSwaps
export function bubbleSortNoSwaps(arr: number[]) {
    var noSwaps;
    for (var i = arr.length; i > 0; i--) {
        noSwaps = true;
        for (var j = 0; j < i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

export function bubbleSortAnotherWay(arr: number[]) {
    const swap = (arr: number[], i: number, j: number) => {
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    };

    // [ 3, 420, 4, 69, 7, 9, 42 ]
    for (let i = arr.length - 1; i > 0; i--) {
        for (let j = 0; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    
    return arr;
}
