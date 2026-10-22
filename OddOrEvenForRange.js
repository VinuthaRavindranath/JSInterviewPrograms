
even =[]
odd =[]

function evenOrOdd(){

    for (let i=1; i<=10; i++){
        if (i % 2 === 0){
            even.push(i)
        }
        else{
            odd.push(i)
        }
    }

    return {even,odd}
}

console.log(evenOrOdd())