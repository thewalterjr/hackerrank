function rotateLeft(d, arr) {    
    for(let i = 0; i < d; i++) {
        let firstItem = arr.shift();
        arr.push(firstItem);
    }
    
    return arr;
}
