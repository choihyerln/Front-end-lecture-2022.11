/*
 * Prototype - 옛날 Javascript에서 제공하는 방법
 *           - 객체를 찍어내는 틀
 *           - 권장하는 방법은 아님
 */

function Product(name, price) {
    this.name = name;
    this.price = price;
    Product.prototype.print = function() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
}

const apple = new Product('사과', 1500);
const grape = new Product('포도', 3000);
const fruits = [apple, grape];

for (let fruit of fruits)
    fruit.print();