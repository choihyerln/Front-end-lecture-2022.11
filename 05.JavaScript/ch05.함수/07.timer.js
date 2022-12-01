const si = setInterval(function() {            // setInterval(callback 함수, 주기(ms))
    console.log(new Date());
}, 1000);

setTimeout(() => console.log('1초 경과'), 1000);

setTimeout(() => clearInterval(si), 5000);    // 5초 후에 인터벌 동작을 멈춤