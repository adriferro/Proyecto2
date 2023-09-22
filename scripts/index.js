const convertFahrenheit = () => {
    const celsius = parseFloat(document.getElementById("celsius").value);

    // Comprobamos que hemos realizado el parseFloat() correctamente
    console.log(typeof(celsius));

    const fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("fahrenheit").textContent = fahrenheit.toFixed(2);
}