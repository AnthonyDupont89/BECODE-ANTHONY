let convert = (temperature) => {
    let degrees = "";
    for (char of temperature) {
        if(char == '-' || char == '.' || !isNaN(char)) {
            degrees += char; 
        }
        parseFloat(degrees);
    }
    
    if (temperature.includes("C")) {
        degrees = (degrees*9/5) + 32;
        console.log(`${Math.round(degrees)}°F`);
    } else if (temperature.includes("F")) {
        degrees = (degrees-32)/9*5;
        console.log(`${Math.round(degrees)}°C`);
    } else {
        console.log("Error");
    }
}

convert("35°C") // "95°F"
convert("19°F") // "-7°C"
convert("33") // "Error"