// 만 65세 이상부터 국민연금 받을 수 있는데, 남은 기간 계산하기

function nationalPensionRemainingYearCount(age_string) {
    // Your code here
    return "앞으로 " + (65 - age_string) + "년 남으셨습니다";
    
}
  
var age_string = "10";
nationalPensionRemainingYearCount(age_string);