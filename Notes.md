## Closure 

    Het gebruik van variabelen die buiten de scope zijn gedefineerd

## Recursion

Functie die zichzelf aanroept
    `voorbeeld`
    
    `funtion reCursion(a){
    if(iets < 0){
    return reCursion(-a)
    }
    }`
    
## Datatypes

    'string = "", object = {key: value}, 
    array = [item, item2, etc], boolean = true || false, 
    number(integer) = 1, function mijnFunctie(){ hier gebeurt iets}'

## #5 Higher order fuctions

  ## Abstraction 
    Verberg details zodat code minder uitgebreid word geschreven.
    
    Als de code korter wordt is hij makkelijker te interpreteren maar je hebt wel
    meer kennis nodig om de code te begrijpen
    
  ## Abstracting Repetition
    
    
  ## Summary
    Het is handig om waardes van functies mee te geven in andere functies.
    Het zorgt ervoor dat we functies kunnen schrijven met "gaten", de code
    deze functies aanroepen kunnen deze "gaten" zelf invullen met waardes.
    
    Arrays bieden een aantal bruikbare higher-order methods. Zo kun je forEach
    gebruiken om te loopen over de elementen in de array. Met filter kun je een
    nieuwe array maken die alleen elementen bevat die voldoen aan de opgegeven
    functie. Een array aanpassen door de elementen door een functie te halen doe 
    je met map.
