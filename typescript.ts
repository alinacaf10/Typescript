// console.log("Ali")

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

class Personal {
    name: string
    age: number
    phone: string
    constructor(name: string, age: number, phone: string) {
        this.name = name
        this.age = age
        this.phone = phone
        console.log("Personal was created")

    }
    showInfos() {
        console.log(`Name: ${this.name}\nAge: ${this.age}\nPhone: ${this.phone}`)
    }

}

class Employee extends Personal {
    salary: number
    constructor(name:string,age:number,phone:string,salary:number){
        super(name,age,phone)
        this.salary=salary
    }
    showInfos(){
        super.showInfos()
        console.log("Salary: "+this.salary)
    }
}

const Ali=new Employee("Ali",22,"775480446",4000)

Ali.showInfos()