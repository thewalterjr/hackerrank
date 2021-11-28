function main() {
    const N = parseInt(readLine().trim(), 10);
    
    let even = N % 2 == 0;
    
    if (!even || (N > 5 && N < 21)) {
        console.log("Weird");
    }
    else {
        console.log("Not Weird");
    } 
}
