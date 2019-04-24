// #2 FIZZBUZZ

for (let number = 0; number < 101; number++){
    if ((number % 3 === 0) && (number % 5 ===0)){   // check of nummer deelbaar is door 3 & 5 zoja
        console.log("FizzBuzz")                     // print FizzBuzz
    }else if(number % 3 === 0){                     // check of nummer deelbaal is door 3 zoja
        console.log("Fizz")}                        // print Fizz
    else if(number % 5 === 0){                      // check of nummer deelbaar is door 5 zoja
           console.log("Buzz")                      // print Buzz
    }else{                                          // als het nummer niet deelbaar is door 3 of 5
        console.log(number)                         // print het nummer
    }
}