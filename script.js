const celsiusValue = document.getElementById("celsius");
const kelvinValue = document.getElementById("kelvin");
const fahrenheitValue = document.getElementById("fahrenheit");

document.getElementById("convert-btn").addEventListener("click", function () {
  const degree = Number(document.getElementById("degree").value);
  const tempType = document.getElementById("temp-type").value;
  console.log(tempType);
  if (tempType === "fahrenheit") {
    const celsius = (degree - 32) * (5 / 9);
    const kelvin = celsius + 273.15;

    celsiusValue.innerHTML = celsius + " &#8451;";
    kelvinValue.innerHTML = kelvin + " K";
    fahrenheitValue.innerHTML = degree + " &#8457;";
  } else if (tempType === "kelvin") {
    const celsius = degree - 273.15;
    const fahrenheit = celsius * (9 / 5) + 32;

    celsiusValue.innerHTML = celsius + " &#8451;";
    kelvinValue.innerHTML = degree + " K";
    fahrenheitValue.innerHTML = fahrenheit + " &#8457;";
  } else {
    const fahrenheit = degree * (9 / 5) + 32;
    const kelvin = degree + 273.15;
    celsiusValue.innerHTML = degree + " &#8451;";
    kelvinValue.innerHTML = kelvin + " K";
    fahrenheitValue.innerHTML = fahrenheit + " &#8457;";
  }
});