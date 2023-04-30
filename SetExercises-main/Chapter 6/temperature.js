function convert() {
    var fahrenheit = document.getElementById("fahrenheit").value;

    var celcius = (fahrenheit - 32) * 5 / 9;

    var kelvin = celcius + 273.15;

    document.getElementById("result").innerHTML = celcius.toFixed(2) + "\u00B0 C and " + kelvin.toFixed(2) + "K";
}