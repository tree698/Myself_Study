class Employee {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployer extends Employee {
  static PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployer.PAY_RATE);
  }
}

class PartTimeEmployer extends Employee {
  static PAY_RATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployer.PAY_RATE);
  }
}

const ellie = new FullTimeEmployer('ellie', 's/w', 2);
console.log(ellie.calculatePay());
