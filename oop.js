class Employee {
    constructor(name, position, salary, workHours) {
        this.name = name;
        this.position = position;
        this.salary = salary;
        this.workHours = workHours;
    }
    work() {
        return `${name} is working`;
    }
    getSakary() {
        return `${salary}`;
    }
    calculateBonus(percentage) {
        return percentage * this.salary;
    }
}