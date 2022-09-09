/* 
    Maximum Sum SubArray using Divide and Conquer:

    Given an array arr[] of integers, the task is to find the maximum sum sub-array among all the possible
    sub-arrays.

    Examples:

    Input: arr[] = {-2, 1, -3, 4, -1, 2, 1, -5, 4} 
    Output: 6 
    {4, -1, 2, 1} is the required sub-array.

    Input: arr[] = {2, 2, -2} 
    Output: 4 
*/
function maxSubArray(array) {
    return iterativeMax(array);
}

/**
 * 
 * @param {Array} array 
 */
function iterativeMax(array) {
    let max = Number.MIN_VALUE;
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j <= array.length; j++) {
            let subArray = array.slice(i, j);
            let sum = subArray.reduce((total, value) => total + value);
            if(sum > max) max = sum;
        }
    }
    return max;
}

// Unused
function divide(array) {
    if(array.length == 0) {
        return Number.MIN_VALUE;
    } else if(array.length == 1) {
        return array[0];
    } else {
        return Math.max(conquer(array.slice(0, Math.ceil(array.length / 2))), 
            conquer(array.slice(Math.ceil(array.length / 2))));
    }
}

// Unused
function conquer(array) {
    return Math.max(array.reduce((total, value) => total + value), divide(array));
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
console.log(maxSubArray([2, 2, -2]));