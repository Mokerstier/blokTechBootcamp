function countChar(x, y){
    let letterCount = 0;
    for (let i = 0; i < x.length; i++){
        if (x[i] == y){
            letterCount += 1;
        } 
    }
    return letterCount;
    
}
function countBs(x){
    
    return countChar(x, "B");
    
}

console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));