let convert = (temperature) => {
    let degreeC = "";
    for (char of temperature) {
        if(char == '-' || char == '.' || !isNaN(char)) {
            degreeC += char; 
        }
        parseFloat(degreeC)
    }
    let degreeF = (degreeC*9/5) + 32;
    console.log(`${degreeF}°F`);
}


// FORMULE : (0 °C × 9/5) + 32 = 32 °F
// let fahrenheit = (celcius*9/5) + 32

convert("35°C") // "95°F"
convert("19°F") // "-7°C"
convert("33") // "Error"

let degree = 35;
