let cars = ['Audi', 'Benz', 'BMW', 'Volvo'];
console.log(cars);

let car = cars.pop();                          // 베열의 마지막 요소를 꺼내고, 배열에서 꺼낸 요소를 제거함
console.log(cars, car);

cars.push('Hyundai');
console.log(cars);

// Array를 생성
let persons = new Array('James', 'Maria');      // 배열도 객체이므로 생성자 함수를 통해 생성 가능
console.log(persons);

// Array 속성
console.log(cars.length, persons.length);

// Array 정렬
console.log('정렬 전', cars)
cars.sort();        // 오름차순 정렬
// let newCars = cars.sort;
console.log('정렬 후', cars)
cars.reverse();     // 내림차순 정렬 -> sort와 reverse
console.log('내림차순 정렬', cars)

// Array join
console.log(cars.join(', '));

// 문자열을 거꾸로 만들 수 있음
let sample = '기러기 토마토 우영우';
// let arr = sample.split('');       // 공백-> 글자 단위로 쪼개짐.
// console.log(arr);
// arr.reverse();
// console.log(arr);
// console.log(arr.join(''));
const reverseStr = sample.split('').reverse().join(''); // 한번에 만들수도 있음
console.log(reverseStr);
const rs = str => str.split('').reverse().join('');     // 글자를 뒤집어주는 함수
console.log(rs('안녕하세요?'));

// 배열의 일부분을 반환
const fruits = ['apple', 'banana', 'cherry', 'grape'];
console.log(fruits.slice(1, 3));
console.log(fruits.slice(2));       // index 2 부터 끝까지를 의미함
console.log(fruits.slice(0,2));     // 2가 아니가 2바로 전까지 추출

// 배열의 일부분을 삭제해서 리턴
const res = fruits.splice(0, 2);         
console.log(res);
console.log(fruits);

// 객체의 배열을 정렬해라
let students = [
    {name: 'james', eng:88, math:78},
    {name: 'maria', eng:80, math:89},
    {name: 'brian', eng:81, math:75},
]

// 영어의 오름차순
// let engAsc = students.sort(function(a,b) {
//     return a.eng - b.eng
// });

// 수학의 내림차순
// students.sort((a,b) => b.math - a.math);
// console.log(students);

// 이름의 오름차순
// students.sort((a,b) => a.name - b.name);    // 틀린 방법

students.sort((a,b) => {
    if (a.name < b.name)
        return -1
    if (a.name > b.name)
        return 1
    else
        return 0
})
console.log(students);