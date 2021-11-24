'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let len = arr.length;
    
    for(let i = 0 ; i < len; i++) {
        if (arr[i] > 0) {
            positive++;
        } 
        else if (arr[i] < 0) {
            negative++;
        }
    }
    
    console.log((positive/len).toFixed(6));
    console.log((negative/len).toFixed(6));
    console.log(((len - positive - negative)/len).toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
