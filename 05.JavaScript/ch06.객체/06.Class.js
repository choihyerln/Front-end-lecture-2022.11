/*
 * 클래스를 사용해 객체를 찍어내는 틀 만들기
 */

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
    print() {
        console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
    }
}

const apple = new Product('사과', 1500);
const grape = new Product('포도', 3000);
const fruits = [apple, grape];

for (let fruit of fruits)
    fruit.print();

// 상속
class Fruit extends Product {
    constructor(name, price, color) {
        super(name, price);
        this.color = color;
    }
    print() {
        super.print();
        console.log(`색깔은 ${this.color}입니다.`);
    }
}
const banana = new Fruit('바나나', 2000, '노란색');
banana.print();