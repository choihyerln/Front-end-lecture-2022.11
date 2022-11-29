// 출력 메소드
console.log("Hello", "World", "!!!");

// 상수, 변수
const hello = "안녕하세요?";    // 상수
var x = 3;                  // 변수, 2015년 이전
let y = 4;                  // 현시점에서는 var대신에 let을 사용할 것!
a = 20;

// 기본 자료형
// 1. number
console.log(typeof(1), typeof(3.14));
console.log(2**10);     // 2의 10제곱, 1024

// 2. 문자열(string)
console.log(typeof('hello'), typeof("world"));
console.log(hello[0], hello[5]);       // hello.charAt(0), hello.substring(0,1)
console.log(`${hello} 3 + 4 = ${x + y}`);       // template literal
console.log(`올해는 ${new Date().getFullYear()}년입니다.}`);    // "올해는" + new Date().getFullYear() + "년입니다."

// 3. 불(boolean)
console.log(typeof(true), typeof(false));
console.log(true < 10);     // true 가 1로 변환이 되어 비교 연산을 수행함 => 1 < 10 이므로 true

// 4. 함수(function)
console.log(typeof function() {});
console.log(typeof(() => {}));      // 람다 함수, () -> {}

// 5. 객체(object)
let obj = {x, y};
console.log(typeof obj);
console.log(obj.x, obj.y);

// 6. undefined
let alpha;
console.log(typeof alpha);  // 아직 정의가 되지 않은 값

// 증감 연산자
console.log(x++);   // 3이 출력되고, x의 값은 4가 됨
console.log(x);     // 4가 출력됨
console.log(++x);   // 5가 출력되고, x의 값도 5

// 강제 자료형 변환
console.log(Number('101'), String(101), Number(true), Number(false));
console.log(Boolean(0), Boolean(undefined), Boolean(''), Boolean(0.0), Boolean(null), Boolean(NaN));     // 이 경우를 제외한 모든 경우는 true
console.log(Boolean(0.1), Boolean(' '), Boolean(100));

console.log(Number('string'));      // NaN: Not a Number (숫자가 아니라서 Number로 변환할 수 없음)
console.log(isNaN(Number('string')));   // true
console.log(Number('0o123'), Number('0x123'), Number('0b101'));     // 8진수, 16진수, 2진수

// 자동 자료형 변환
console.log(52 + 37);
console.log(52 + '37',  21 + '37' + 31);
console.log(1 + true, true + 'bool');     // 숫자형, 문자형.. true 는 상황에 따라 값이 변함
console.log(52 -'37', '37' - 21.5, '37' * 2);      // 문자열이 숫자로 바뀌어 계산됨

// 일치 연산자 - 자료형까지 계산
console.log(1 == 1.0, 1=== 1.0);        // 둘 다 숫자형이라 일치
console.log(1 == '1', 1 === '1', 1 == true, 1===true);      // 값은 같으나, 자료형은 다름

// 상수
const today = new Date;
console.log(today);
// today = " ";        // run-time error 발생