// q1
function age65(num){
    if (typeof num == "number"){
        if (num >= 65){
            return "Special Discount"
        }
        else {
            return "Not Allowed"
        }
    }
    else {
        return "Not a valid number"
    }
}

console.log(age65(76),"--> check age")
console.log(age65(56),"--> check age")
console.log(age65("89"),"--> check age")


// q2

function mult100(num){
    if (typeof num == "number"){
        let a = num * 100;
        return a
    }
    else {
        return "Not a valid number"
    }
}
function mult(arr){
    if (arr.constructor === Array){
        const ans = arr.map(mult100)
        return ans
    }
    else {
        return "Not a valid input array"
    }
}

console.log(mult([1,2,3,4,5]),"--> multiply by 100")
console.log(mult([1,2,3,"99",5,"gtew",7]),"--> multiply by 100")
console.log(mult("wgew"),"--> multiply by 100")

// q3
function gr5(arr){
    if (arr.constructor === Array){
        if (arr.length > 5){
            const ans = arr.map(mult100)
            return ans
        }
        else{
            return "Array size is not greater than 5"
        }
    }
    else {
        return "Not a valid input array"
    }
}


console.log(gr5([1,2,3,4,5,8,0]),"--> greater than 5")
console.log(gr5([1,2,3,4,5]),"--> greater than 5")
console.log(gr5("[1,2,3,4,5,8,0]"),"--> greater than 5")

// q4


function multOddEven(num){
    if (typeof num == "number"){
        let a = num * 1;
        if (num % 2 == 0){
            a = num * 100;
            return a
        }
        else {
            return a
        }
    }
    else {
        return "Not a valid number"
    }
}


function OddEven(arr){
    if (arr.constructor === Array){
        const ans = arr.map(multOddEven)
        return ans
    }
    else {
        return "Not a valid input array"
    }
}

console.log(OddEven([1,2,3,4,5,6]), "--> odd/even")
console.log(OddEven([1,2,3,4,5,6,"gasd",8]), "--> odd/even")
console.log(OddEven("[1,2,3,4,5,6]"), "--> odd/even")

//q 5

let arInput = [154, 657, 564, 561, 154, 678, 100, 154]

function checkInstance(arr,num){

    let counter = 0;
    for (let i =0;i < arr.length; i++){
        if (arr[i] == num){
            counter = counter + 1;
        }
 
    }
    return counter
}

console.log(checkInstance(arInput,154),"--> no. of times 154 appeared")

// q6

function checkType(input){
    if (typeof input == "object"){
        return "object"
    }
    else {
        return "It's something else"
    }
}

console.log(checkType([1,"asad",6,2]), "--> check type")
console.log(checkType(mult100),"--> check type")