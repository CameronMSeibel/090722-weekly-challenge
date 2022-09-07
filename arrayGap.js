/*
    Largest gap in an array:
    Given an unsorted array of length N, and we have to find the largest gap between any two elements
    of the array. In simple words, find max(|Ai-Aj|) where 1 ≤ i ≤ N and 1 ≤ j ≤ N.

    Examples:  

    Input : arr = {3, 10, 6, 7}
    Output : 7
    Explanation :
        Here, we can see largest gap can be
        found between 3 and 10 which is 7

    Input : arr = {-3, -1, 6, 7, 0}
    Output : 10
    Explanation :
        Here, we can see largest gap can be 
        found between -3 and 7 which is 10 
*/
function findLargestGap(array) {
    if(array.length == 0) {
        return 0; // Case of empty array
    }
    let max = Number.MIN_VALUE;
    let min = Number.MAX_VALUE;
    array.forEach((value) => {
        if(value > max) {
            max = value;
        }
        if(value < min) {
            min = value;
        }
    });
    return max - min;
}

// Test cases
console.log(findLargestGap([3, 10, 6, 7])) // expect 7
console.log(findLargestGap([-3, -1, 6, 7, 0])); // expect 10
