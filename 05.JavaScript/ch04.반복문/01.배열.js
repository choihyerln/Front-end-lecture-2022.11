const array = [52, 34.5, '아침밥', '사과', true, false];
console.log(typeof array);      // object
console.log(array.length);       // 6개
console.log(array[0], array[2], array[array.length-1]);

// 기본 for 반복문
for (let i=0; i<array.length; i++)
    console.log(array[i]);

// Enhanced for-loop
console.log("Enhanced for-loop")
for (let item of array)
    console.log(item);

console.log(array);