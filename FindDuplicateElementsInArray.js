
function findDuplicates(arr){

    let duplicates=[]
    let seen=[]
    for(let i=0;i<arr.length;i++){
        if(seen.includes(arr[i])){
        duplicates.push(arr[i])
        }
        else{
            seen.push(arr[i])
        }
    } 

    return duplicates
}
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));