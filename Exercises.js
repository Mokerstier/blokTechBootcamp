
//CODE
// #1 PIRAMIDE

for (let hekkie = "#"; hekkie.length < 8; hekkie += "#") {
    console.log(hekkie)}

//RESULT
//#
//##
//###
//####
//#####
//######
//#######

// #2 FIZZBUZZ

for (let number = 0; number < 101; number++){ if ((number % 3 === 0) && (number % 5 ===0)){ console.log("FizzBuzz")
}else if(number % 3 === 0){console.log("Fizz")} else if(number % 5 === 0){console.log("Buzz")}
else{ console.log(number)}}

// #3 Chessbord

let schaakbord = "";

for (let line = 0; line < size; line++){
    for (let characters = 0; characters < size; characters++){
        if ((characters + line)%2 == 0){ schaakbord += " "}
        else { schaakbord += "#"}}
        schaakbord += "\n"}

// #4 Minimun

function min (x, y){ 
    if (x ===y){
        return "both are the same";
    } else if (x > y){
        return y;
    } else return x;}
