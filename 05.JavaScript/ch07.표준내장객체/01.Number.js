// 기본 자료형 - primitive type
let number = 273.1;
let number2 = Number('273.1');

console.log(number === number2);     // 값이랑 데이터 타입 모두 같은지 물어보는 기호 : ===

// 객체 자료형 - Wrapper Class
let numObj = new Number(273.1);
console.log(number == numObj);       // 값은 같다.
console.log(number === numObj);      // Number, Object  => 값은 같지만 타입은 다름

let str = '과자|1500';
console.log(str.split('|'));

let strObj = new String('과자|1500');
console.log(strObj.split('|'));

const pi = Math.PI;
console.log(pi);
console.log(pi.toExponential());        // 지수 형태
console.log(pi.toFixed(5));             // 소수점 이하 자릿수 (5면 5자리까지..)
console.log(pi.toPrecision(3));         // 유효숫자 (3개)

console.log(Number.MAX_VALUE, Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
console.log(Math.pow(2, 53) - 1);       // 9007199254740991, (= Number.MAX_SAFE_INTEGER)