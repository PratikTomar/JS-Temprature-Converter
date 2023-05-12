// Getting the input element
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");

// Adding input listener and adding functionality of changing the value of fahrenheit when we enter value in celsius
celsius.addEventListener("input", () => {
  let c = parseFloat(celsius.value);
  let f = ((c * 9) / 5) + 32;
  fahrenheit.value = f;
});

// Adding input listener and adding functionality of changing the value of celsius when we enter value in fahrenheit
fahrenheit.addEventListener("input", () => {
  let f = parseFloat(fahrenheit.value);
  let c = ((f - 32) * 5) / 9;
  celsius.value = c;
});
