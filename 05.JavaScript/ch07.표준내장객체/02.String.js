let hello = '안녕하세요?';

// 속성
console.log(hello.length);      // 6글자

// Methods
console.log(hello.charAt(0), hello[0]);
console.log(hello.concat(' 여러분!!!'));            // 안녕하세요? + 여러분!!!

console.log(hello.indexOf('하'));                  // '히' 가 몇번째에 있는가


// 디지털 시계에 하루동안 (00:00 ~ 23:59) 3이 표시되는 시간을 하루 중 총 몇 초 일까요?"
let hour = 24;
let min = 60;
let result = 0;

for(let i=0; i<hour; i++) {
    for(let j=0; j<min; j++) {
        if(i % 10 == 3 || parseInt(j / 10) == 3 || j % 10 == 3) {
            result += 60;
        }
    }
}
console.log(result);
// parseInt(j / 10) == 3       // 3이 나옴
// J / 10 == 3.3




let totalSeconds = 0;
for (let hour = 0; hour < 24; hour++) {
    for (let min = 0; min < 60; min++){
        const display = hour + ":" + min;
        if(display.indexOf('3')>=0)
            totalSeconds += 60;
    }
}
console.log(totalSeconds);


// 정규 표현식
const sample = 'ㅠㅠA quick brown fox 갈색의 재빠른 여우가 Jumps oVer 게으른 개를 The lazy dog.ㅋㅋ';

let newStr = sample.replace(/[A-Z]/, '대');     // 정규표현식 자리에 '[A-Z]' 안됨! ' 대신 /로 표시해줘야 함, 맨 앞에 나온 거 한개만 바꿈
console.log(newStr);
newStr = sample.replace(/o/, 'O');             // 맨 앞에 나온 거 한개만 바꿈
console.log(newStr)

newStr = sample.replace(/o/g, 'O');             // g(global) 를 붙여줘야 모든 o를 O로 바꿈
console.log(newStr)
console.log(sample.replace(/[A-Z]\w+/g, 'XXX'));

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);

// 한글과 공백만 남기고 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, '');
console.log(newStr);

// split
let fruits = '사과,배,감,포도';
let fruitArray = fruits.split(',');
console.log(fruitArray);

const products = '망치,나사,못,톱,도끼'.split(',');
console.log(products);

fruits = '사과, 배,감, 포도';
fruitArray = fruits.split(', ');
console.log(fruitArray);

fruitArray = fruits.split(',').map(s => s.trim());      // array element 각각에 대해서 callback 함수 적용
console.log(fruitArray);

// 문자열의 일부분 추출
const today = new Date().toISOString();
console.log(today);                     // 2022-12-01T06:31:10.862Z
console.log(today.substring(0,10));     // 날짜 추출: 2022-12-01
console.log(today.substring(11,19));     // 시간 추출: 06:32:55

// 현재 날짜/시간을 YYYY-MM-DD hh:mm:ss 형식으로 만들어주는 함수
function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);
}
function datetime() {
    const now = new Date();
    return `${now.getFullYear()}-${twoDigit(now.getMonth())}-${twoDigit(now.getDate())} ` +
            `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`
}

const now = datetime();
console.log(now);       // 2022-11-01 15:45:40

console.log(now.substring(2,16));