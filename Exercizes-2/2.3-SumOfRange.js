function range(begin, eind, stap = begin < eind ? 1 : -1) {
    let array = []; // begin met lege array
  
    if (stap > 0) { // positieve waarde
      for (let i = begin; i <= eind; i += stap) array.push(i); // (begin bij de eerste waarde, als begin < dan eind, i + stap); push i in de array
    } else { // negatieve waarde
      for (let i = begin; i >= eind; i += stap) array.push(i); // (begin bij de eerste waarde, als begin > dan eind, i + stap); push i in de array
    }
    return array;
}

function sum(list){
   let total = 0;
   for (let value of list){
       total += value;
   }
   return total;
}


console.log(range(1, 10));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));