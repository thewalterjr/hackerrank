function reverseArray(a) {
    let newAr = [];
    
    for (let i = a.length - 1; i >= 0; i--) {
        newAr.push(a[i]);
    }
    
    return newAr;
}
