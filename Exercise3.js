//Konversi °Fahrenheit ke °Celcius
let fahrenheitCelsius = (fahrenheit) => {
    let celsius = (fahrenheit - 32) * (5/9);
    console.log(`${fahrenheit}°F = ${celsius.toFixed(2)}°C`);
};

//Kalkulator BMI
let BMI = (weight, height) => {
    let bmi = weight / (height * height);
    let result;

    if (bmi < 18.5) {
        result = "kurang gizi";
    } else if (bmi >= 18.5 && bmi < 25) {
        result = "normal";
    } else if (bmi >= 25 && bmi < 30) {
        result = "kelebihan gizi";
    } else {
        result = "terlalu gode";
    }
    console.log(`Index Massa Tubuh kamu ${bmi.toFixed(2)} dan itu ${result}.`);
};

fahrenheitCelsius(77.00);
//25.00°C

BMI(70, 1.7);
//24.22

