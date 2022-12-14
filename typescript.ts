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

class Personal{
    name:string
    age:number
    phone:string
    constructor(name:string,age:number,phone:string){
        this.name=name
        this.age=age
        this.phone=phone
    console.log("Personal was created")

    }
    showInfos(){
        console.log(`Name: ${this.name}\nAge: ${this.age}\nPhone: ${this.phone}`)
    }

}

const names=new Personal("Ali",22,"775480446")
names.showInfos()