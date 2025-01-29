function convertirTemperatura() {
  let celsius = prompt("Ingrese la temperatura en grados Celsius:");
  
  // Verifica si el valor ingresado es un número
  while (isNaN(celsius)) {
    alert("Por favor, ingrese un número válido.");
    celsius = prompt("Ingrese la temperatura en grados Celsius:");
  }
  
  celsius = parseFloat(celsius);
  let fahrenheit = (celsius * 9/5) + 32;
  let kelvin = celsius + 273.15;
  
  console.log(`Grados Kelvin: ${kelvin.toFixed(2)} K`);
  console.log(`Grados Fahrenheit: ${fahrenheit.toFixed(2)} °F`);
  
  // Asegúrate de que el elemento exista antes de intentar establecer su textContent
  const resultado = document.getElementById("resultado");
  if (resultado) {
    resultado.innerHTML = 
      `Grados Kelvin: ${kelvin.toFixed(2)} K<br>Grados Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
  } else {
    console.error("Elemento con id 'resultado' no encontrado");
  }
}

// Llama a la función para convertir la temperatura después de que el DOM se haya cargado completamente
window.onload = convertirTemperatura;

  