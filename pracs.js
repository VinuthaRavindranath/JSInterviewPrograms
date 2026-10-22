function groupAnagrans(arr){
    let map= new Map();
    for(let word of arr){
        let key= word.split('').sort().join('')
        if(!map.has(key)) map.set(key,[]);
        map.get(key).push(word)
    }

    return Array.from(map.values())
}

console.log(groupAnagrans(["eat","tea","tan","ate","nat","bat"]))