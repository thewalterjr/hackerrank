function runningSum(nums: number[]): number[] {
    const newArr = [];

    nums.map((x, i) => {
        if (i === 0 ) {
            newArr.push(x)
        } else {
            newArr.push(newArr[i-1] + x)
        }
    });
    
    return newArr;
};
