function callFiveTimes(callback) {
    for (let i=0; i<5; i++)
        callback();
}

const cb = function() {
    console.log('함수가 호출되었음.');
}
// cb();

// callFiveTimes(cb);

function cb2() {
    console.log('함수가 호출되었음.')
}
// callFiveTimes(cb2);

// callback으로 익명함수를 전달
callFiveTimes(function() {
    console.log('함수가 호출되었음.');
});

// callback으로 화살표함수(람다 함수)를 전달
callFiveTimes(() => {
    console.log('함수가 호출되었음.');
});

callFiveTimes(() => console.log('함수가 호출되었음.'));