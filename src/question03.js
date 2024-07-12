import leia from "readline-sync"

console.log("conversor de temperaturas!");

var unidadeOrigem = leia.question("Digite a unidade de medida de origem (Celsius, Fahrenheit ou Kelvin): ");
var temperatura = parseFloat(leia.question("Digite a temperatura: "));
var unidadeDestino = leia.question("Digite a unidade de medida para qual deseja converter (Celsius, Fahrenheit ou Kelvin): ");


function celsiusParaFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}


function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5/9);
}


function celsiusParaKelvin(celsius) {
    return celsius + 273.15;
}


function kelvinParaCelsius(kelvin) {
    return kelvin - 273.15;
}


function fahrenheitParaKelvin(fahrenheit) {
    return (fahrenheit - 32) * (5/9) + 273.15;
}


function kelvinParaFahrenheit(kelvin) {
    return (kelvin - 273.15) * 1.8 + 32;
}


function converterTemperatura(origem, temperatura, destino) {
    var temperaturaConvertida;

    if (origem === "Celsius" && destino === "Fahrenheit") {
        temperaturaConvertida = celsiusParaFahrenheit(temperatura);
    } else if (origem === "Fahrenheit" && destino === "Celsius") {
        temperaturaConvertida = fahrenheitParaCelsius(temperatura);
    } else if (origem === "Celsius" && destino === "Kelvin") {
        temperaturaConvertida = celsiusParaKelvin(temperatura);
    } else if (origem === "Kelvin" && destino === "Celsius") {
        temperaturaConvertida = kelvinParaCelsius(temperatura);
    } else if (origem === "Fahrenheit" && destino === "Kelvin") {
        temperaturaConvertida = fahrenheitParaKelvin(temperatura);
    } else if (origem === "Kelvin" && destino === "Fahrenheit") {
        temperaturaConvertida = kelvinParaFahrenheit(temperatura);
    } else {
        
    }


console.log(converterTemperatura(unidadeOrigem, temperatura, unidadeDestino));}
