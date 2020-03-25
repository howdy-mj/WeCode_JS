// 주소에 '시'로 끝나는 부분 없애고 출력하기

function sliceCityFromAddress(address) {
    let lastChar = address.indexOf("시");
    let guwangChar = address.indexOf("광역시");
    let tekChar = address.indexOf("특별시");
    // console.log(lastChar);
    
    if (guwangChar !== -1 || tekChar !== -1) {
      address = address.slice(6, address.length); 
    } else if (lastChar !== -1) {
        address = address.slice(0, lastChar-2) + address.slice(lastChar+2, address.length);
    }
    
    return address;
}

// var address = "경기도 성남시 분당구 중앙공원로 53";
var address = "서울특별시 어쩌구 저쩌구 위워크"
sliceCityFromAddress(address);