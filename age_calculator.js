// 만 나이 계산하기

function getWesternAge(birthday) {
    var today = new Date();
    var todayYear = today.getFullYear();
    var todayTime = today.getMonth() + today.getDate();
    // console.log(todayYear);
    var birthYear = birthday.getFullYear();
    var birthTime = birthday.getMonth() + birthday.getDate();
    // console.log(birth);
    
    if (todayTime < birthTime) {
      // 생일 안 지났으면 todayYear - birthYear - 1
      return todayYear - birthYear - 1;
    } else {
      return todayYear - birthYear;
    }
    
}
  
var birthday = new Date("1990-03-21T00:45:06.562Z");
getWesternAge(birthday);