function moveZeroesToEnd(arr){
    zeroArr=[]
    nonZerroArr=[]
    for(i=0;i<arr.length;i++){
        if(arr[i]===0){
            zeroArr.push(arr[i])
        }
        else{
            nonZerroArr.push(arr[i])
        }
    }

    return [...zeroArr,...nonZerroArr]
}

console.log(moveZeroesToEnd([0, 1, 0, 3, 12, 0, 5]));