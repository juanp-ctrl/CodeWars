function spinWords(string){
    let words = string.split(" ");
    for (i in words){
        if(words[i].length >= 5){
            words[i] = words[i].split("").reverse().join("");
        }
    }

    let result = words.join(" ");
    return result;
}