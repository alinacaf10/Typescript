// console.log("Ali")

// let a : string;
// a="Nacaf";
// console.log(a)

// const a:Array<number> = [1,4,51,86]
// console.log(...a)
function addNum(num1:number,num2:number){
    return num1+num2;
}
console.log(addNum(12,54))

function addnumber(num1:number,num2?:number){
    if (num2==undefined) {
        return "First num: "+num1
    }
    return "sum: "+(num1+num2)
}

console.log(addnumber(13,41))