// console.log("Ali")
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// let a : string;
// a="Nacaf";
// console.log(a)
// const a:Array<number> = [1,4,51,86]
// console.log(...a)
// function addNum(num1:number,num2:number){
//     return num1+num2;
// }
// console.log(addNum(12,54))
// function addnumber(num1:number,num2?:number){
//     if (num2==undefined) {
//         return "First num: "+num1
//     }
//     return "sum: "+(num1+num2)
// }
// console.log(addnumber(13,41))
var Personal = /** @class */ (function () {
    function Personal(name, age, phone) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        console.log("Personal was created");
    }
    Personal.prototype.showInfos = function () {
        console.log("Name: ".concat(this.name, "\nAge: ").concat(this.age, "\nPhone: ").concat(this.phone));
    };
    return Personal;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, phone, salary) {
        var _this = _super.call(this, name, age, phone) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.showInfos = function () {
        _super.prototype.showInfos.call(this);
        console.log("Salary: " + this.salary);
    };
    return Employee;
}(Personal));
var Ali = new Employee("Ali", 22, "775480446", 4000);
Ali.showInfos();
