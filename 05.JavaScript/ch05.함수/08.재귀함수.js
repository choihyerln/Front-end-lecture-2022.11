// 재귀 함수(Recursive funtion)

function factorial(num) {
    let product = 1;
    for (let i=0; i<=num; i++)
        product += i;
    return product;
}
console.log(factorial(10));