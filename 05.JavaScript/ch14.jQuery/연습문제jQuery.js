function answer1() {
    let num1Node = document.getElementById('num1');
    let num2Node = document.getElementById('num2');
    let num1 = parseInt(num1Node.value);
    let num2 = parseInt(num2Node.value);
    if (num1 < 1 || num1 > 20 || num2 < 10 || num2 > 30 || (num2 - num1) < 4) {
        alert("입력 값의 범위를 확인하세요.");
        return;
    }

    let powerArray = [];
    for (let i=num1; i<=num2; i++) {
        powerArray.push(Math.pow(2, i));
    }
    let resultNode = document.getElementById('result1');
    resultNode.innerHTML = '결과: ' + powerArray;
    resultNode.style.color = 'blue';
}

function answer2() {
    let text = $('#text2').val();
    const noPunct = text.replace(/[',.]/g, '').replace()
    $('#noPunct').text(noPunct);

    const words = noPunct.split(' ');
    let count = 0;
    for (let word of words)
        if (word == 'the')
            count++;
    
    $('#result2').text(`'the'의 개수는 ${count}입니다.`)
                .css('color', 'blue');
}

function answer3() {
    let prices = $('#price').val().split(';').map(x => parseInt(x));      // ['51900', '83000', '158000', ...]

    prices.sort((a,b) => b - a);    // prices가 내림차순으로 정렬됨
    
    $('#result3').text(prices)
                .css('color', 'blue');
}

var cars = [];
function answer4_add() {
    cars.push($('#car').val());
}
function answer4() {
    const manu = cars.map(x => x.split(' ')[0]);
    const model = cars.map(x => x.split(' ').slice(1).join(' '));

    $('#input').text()