function wordFrequency(sentence){
    let words= sentence.split(' ')
    let map= new Map()

    for(let word of words){
        map.set(word,(map.get(word)||0)+1)
    }

    return map

}
console.log(wordFrequency("the cat sat on the mat the cat ran"));