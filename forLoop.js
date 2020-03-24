// arr 중에서 가장 작은 값 출력하기
// arr가 비어있으면 0 출력

function findSmallestElement(arr) {
  
    if (arr.length === 0) {
        return 0;
    } else {
        let minValue = arr[0];
        for (var i = 0; i < arr.length; i++) {
            let num = arr[i];
        
            if (num < minValue) {
                minValue = num;
            }
        }
      return minValue;
    }
}
  
var arr = [20, 30, 5, 1, 7, 200, 9];
findSmallestElement(arr);