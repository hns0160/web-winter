// q1

function printCalendar(arrM,arrD){
    for(let month of arrM){

        for (let i = 0;i < arrD.length ; i ++){
            console.log(month, arrD[i])}
    }
}

const months =  ["Jan", "Feb", "Mar"]
const days = [1,2,3,4,5,6,7,8,9,10]

printCalendar(months,days)


// q2
const arr = [4,2,6,1]

function cloneArray(arrOld){
    let arrNew = [];
    i = 0;
    while (i < arrOld.length){
        arrNew[i] = arrOld[i];
        i++;
    }
    return arrNew
}

console.log(cloneArray(arr))

//q3
let arrNthElement = ["yn",0,45,877,null,45]
function getNthElement(arrN,n){
    if (arrN[n] != undefined){
        return arrN[n]
    }
    else {
        return "element does not exist"
    }
}

console.log(getNthElement(arrNthElement,2))

// q4

function customPush(arrP,item){
    arrP[arrP.length] = item;
    return arrP.length
}

function customPop(arrP){
    last = arrP[arrP.length - 1];
    arrP.length = arrP.length - 1;
    return last
}

let arrTest = [1,2,3,4,5]

console.log(customPush(arrTest,"New"));
console.log(customPop(arrTest))