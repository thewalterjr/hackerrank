function miniMaxSum(arr) {
    let sum = arr.reduce((x, y) => x + y);
    let maxSum = Math.max(...arr);
    let minSum = Math.min(...arr);
    
    console.log((sum - maxSum), (sum - minSum));
}
