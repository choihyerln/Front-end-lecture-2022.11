// 매개변수의 값이 지정되지 않은 경우의 대처 방법
function print(name, count) {
    count = count ? count : 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과', 40);
print('감');

function print2(name, count=0) {
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과', 40);
print('감');