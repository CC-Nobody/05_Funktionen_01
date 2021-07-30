/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken

// Funktionsaufruf (call)
// test();

// Funktionsrumpf (body) | callee
function test()
{
    console.log("Hallo Kevin!");
}

/***** Funktionen 02a *****/
// 2a. Parametrisierung + Datenübergabe von INNEN

function ausgabeNamen() 
{
    const firstName = "Kevin"; // Variable --> lokal scope
    console.log("Hallo " + firstName + "!");
}

// ausgabeNamen();
// console.log(firstName);  // Fehler --> lokal!!!

/***** Funktionen 02b *****/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

function ausgabeNamenParam(firstName) 
{
    if (firstName == "" || firstName == undefined) 
    {
        firstName = "Nobody";
    }
    
    console.log("Hallo " + firstName + "!");    
}

// ausgabeNamenParam("Kevin"); // --> Argument(e) args
// ausgabeNamenParam("Maurice");
// ausgabeNamenParam("Karolina");
// ausgabeNamenParam();
// ausgabeNamenParam(prompt("Bitte Vornamen eingeben:"));

/***** Funktionen 02c *****/
// 2c. Mehrere Parameter

function ausgabeNamenParams(firstName,familyName) 
{
    console.log("Hallo " + firstName + " " + familyName + "!");    
}

ausgabeNamenParams("Kevin", "Clegg");
ausgabeNamenParams("Clegg","Kevin");
ausgabeNamenParams(prompt("Vorname:?"),prompt("Nachname:?"));