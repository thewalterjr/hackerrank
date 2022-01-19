function subSequence(array, subArray) {

  let index = 0;

  for (const value of array) {

    if (value === subArray[index]) {
      index ++;
    }

    if (index === subArray.length) {
      return true;
    }
  } 

  return false;
}


let array = [1, 3, 5, 6, 8, 10, 19, 22];
let subArray = [5, 8, 22, 10];

subSequence(array, subArray);
