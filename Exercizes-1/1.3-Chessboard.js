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