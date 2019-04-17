
//CODE
// #1 PIRAMIDE

for (let hekkie = "#"; hekkie.length < 8; hekkie += "#") {  //loop door de string en voeg "#" toe 
     console.log(hekkie)                                    //na elke loop tot de string hekkie 7 tekens bevat
}                                                           //print hekkie na elke loop (7 keer dus)

//RESULT
//#
//##
//###
//####
//#####
//######
//#######

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

// #3 Chessbord

let size = 8;                                       // defineer de maat van het bord (8 zoals in het voorbeeld)
let schaakbord = "";                                // begin met een lege string ""

for (let line = 0; line < size; line++){            // loop door het aantal regels tot size (8) is bereikt
    for (let characters = 0; characters < size; characters++){  // loop door het aantal characters tot de size (8) is bereikt
        if ((characters + line)%2 == 0){            // als line en character (index) even is print een spatie " "
            schaakbord += " "
        }else {                                     // anders print een hekkie
            schaakbord += "#"
             }
    }
        schaakbord += "\n"                          // begin een nieuwe regel na elke voltooide line (8)
}

// #4 Minimun

function min (x, y){ 
    if (x === y){                   // zijn x en y evengroot bijv:(2, 2) 
        return "both are the same"; //print "both are the same"
    } else if (x > y){              // is x groter als y 
        return y;                   // print y
    } else return x;}               // anders print x (want die is dan kleiner)
