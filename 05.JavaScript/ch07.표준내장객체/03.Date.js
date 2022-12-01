// Date 객체 생성 방법
// 1. 현재 날짜/시간
let today = new Date();
console.log(today);
// console.log(today.toLocalString()); -> 안됨..
console.log(new Date().toDateString());

// 2. 유닉스 타임 기준 (1970.1.1 이후 ms 단위로)
let oneDay = new Date(1.67e12);
console.log(oneDay);

// 3. 문자열 기반
let strDate = new Date("December 1, 2022 17:05:00");
console.log(strDate);

// 4.시간 요소(연, 월-1, 일, 시, 분, 초)
let timeDate = new Date(2022, 11, 1, 17, 6, 0);
console.log(timeDate.toLocaleString());

// 매개변수로 받은 날짜/시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}
console.log(myDatetime(timeDate));

// 시간 더하고 빼기
today.setDate(today.getDate() + 100);
console.log(myDatetime(today));

// 오늘 : 1년 11개월 8일 후
let date = new Date();
date.setFullYear(date.getFullYear() + 1);
date.setMonth(date.getMonth() + 11);
date.setDate(date.getDate() + 8);
console.log(date);

// 시간 간격
let now = new Date();
console.log(now.getTime());
const xmas = new Date(2022, 11, 25);
console.log(myDatetime(xmas));

const diffMs = xmas.getTime() - now.getTime();  // 크리스마스와 오늘 사이의 밀리초 계산
const diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);