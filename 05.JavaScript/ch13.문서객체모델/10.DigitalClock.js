function twoDigit(num) {
    return (num < 10) ? '0'+num : String(num);  
}
function myDatetime(date) {
    return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} ` +
            `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`
}

window.onload = function() {
    setInterval(() => {
        const now = new Date();
        const currDay = myDatetime(now).substring(0,10);
        const weekday = '일월화수목금토'.split('')[now.getDay()];
        const currentDay = `${currDay}(${weekday})`;
        
        const currentTime = myDatetime(now).substring(11);

        document.getElementById('date').innerHTML = currentDay;
        document.getElementById('time').innerHTML = currentTime;    // 16:24:14

        document.getElementById('t1').src = `../../img/digits/${currentTime[0]}.svg`;
        document.getElementById('t2').src = `../../img/digits/${currentTime[1]}.svg`;
        document.getElementById('t3').src = `../../img/digits/${currentTime[3]}.svg`;
        document.getElementById('t4').src = `../../img/digits/${currentTime[4]}.svg`;
        document.getElementById('t5').src = `../../img/digits/${currentTime[6]}.svg`;
        document.getElementById('t6').src = `../../img/digits/${currentTime[7]}.svg`;
    }, 1000);
}