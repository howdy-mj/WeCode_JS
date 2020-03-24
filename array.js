// myArray의 첫번째 요소와 마지막 요소의 값을 더한 값을 return

function addFirstAndLast(myArray) {
    var last = myArray.length - 1;
    
    if (myArray.length === 0) {
    // array가 비었다면 0 리턴
        return 0;
    } else if (myArray[1] === undefined) {
      return myArray[0];
    }
    
    return myArray[0] + myArray[last];
}
  
let myArray = [1, 2];

addFirstAndLast(myArray);