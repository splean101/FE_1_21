//1.

const car = {
  model: 'tesla',
  year: 2019,
  color: 'white',
};
//1.1
car.color = 'biege';
//1.2
car.type = 'electrical';
//1.3
car.signal = function () {
  alert('fa! fa!');
};

//2.

const salaries = {
  frontend: 12000,
  backend: 10000,
  designer: 8000,
  dayPay() {
    alert('We must pay salary on Tuesday!');
  },
  total() {
    let result = 0;
    for (const i in salaries) {
      if (typeof salaries[i] === 'number') {
        result += salaries[i];
      }
    }
    return result;
  },
};

console.log(salaries.total());
salaries.manager = 5000;
console.log(salaries.total());

//3.

function Comp(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
}

const dell = new Comp('Dell', 'windows', 800);
const apple = new Comp('Apple', 'MAC OS', 1700);

//4.

function Comp1(brand, system, cost) {
  this.brand = brand;
  this.system = system;
  this.cost = cost;
  this[Symbol.toPrimitive] = function (hint) {
    switch (hint) {
      case 'string':
        return this.brand;
      case 'number':
        return this.cost;
      case 'default':
        return this.brand + ' ' + this.system + ' ' + this.cost + ' // ';
    }
  };
}

const dell1 = new Comp1('Dell', 'windows', 800);
const apple1 = new Comp1('Apple', 'MAC OS', 1700);

console.log(String(dell1));
console.log(+apple1);
console.log(dell1 + apple1);
