function nonDuplicateWords(sentence){
    let map=new Map()
    let words=sentence.split(' ')

    for(i=0;i<words.length;i++){
        map.set(words[i],(map.get(words[i])||0)+1)
    }

    let uniqueWords=words.filter(item=>map.get(item)===1)

    return uniqueWords.join(' ')

}
let a = "roshan is automation tester & roshan is ui tester";
console.log(nonDuplicateWords(a))