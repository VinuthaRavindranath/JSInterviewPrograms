function name(num) {
    revnum=0

    while(num>0) {
        let digit=num%10
        revnum=revnum*10+digit
        num=Math.floor(num/10)
    }
    return revnum
}

console.log(name(1234)) // Output: 4321