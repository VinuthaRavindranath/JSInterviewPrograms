function iEven(n){

    if(typeof n != 'number' || n <1){
        return "input is not a number or it is less than 2"
    }

    return n % 2 === 0 ? "Even" : "Odd"
}

console.log(iEven(1))