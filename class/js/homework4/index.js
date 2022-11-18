//q1

function discount(input_date){

    if (input_date >= 1 && input_date <= 30){      
        switch(input_date){
            case 1:
                return "Too Early"
            case 15:
                return "Here is your discount"
            case 30:
                return "Too Late"
            default: 
                return "Not a valid date"
        }
    }
    else {
        return "Please choose a date between 1 and 30"
    }
}

console.log(discount(15))


//q2

function containNum(num1,num2){
    let contain_arr = [];
    if (num2 > num1){
        let i = num1 + 1;
        while (i < num2){
            contain_arr.push(i);
            i++;
        }

    return contain_arr

    }
}

console.log(containNum(3,9))


//q3

function getKeys(myObj){
    let key_obj = []
    for (key in myObj){
        key_obj.push(key)
    }
    return key_obj
}
const new_obj =  {name:"Jack", email:"jack@gmail.com", age:30}
console.log(getKeys(new_obj))

//q4

function stockProfit(stockDays){

    let buy_day = 0;
    let max_profit = 0;
    let current_profit = 0;

    for(let sell_day = 1; sell_day < stockDays.length; sell_day++){
            current_profit = stockDays[sell_day] - stockDays[buy_day];
            if (current_profit > max_profit){
                max_profit = current_profit
            }
            else {
                buy_day = sell_day
            }
        }

    return max_profit
}

let stocks = [ 315, 50, 314, 684 ,100, 648, 132, 50, 98, 45 ]

console.log(stockProfit(stocks))