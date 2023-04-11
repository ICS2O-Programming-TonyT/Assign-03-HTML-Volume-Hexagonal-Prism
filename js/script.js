// Get the form and result elements
const form = document.getElementById('converter-form');
const resultDiv = document.getElementById('result');

// Add event listener to the form submit button
form.addEventListener('submit', function(event) {
  // Prevent default form submission
  event.preventDefault();
  
  // Get the Fahrenheit value from the form
  const Base = parseFloat(document.getElementById('Base-Edge').value);
  const Height = parseFloat(document.getElementById('Height').value);
  const Units = document.getElementById('Unit').value;
  
  // Calculate the Celsius value
  const squareroot3 = Math.sqrt(3)
  const formula = ((3*squareroot3)/2)*(Base**2)*Height
  
  // Display the result
  resultDiv.innerHTML = `The Volume a Hexagonal Prism is ${formula.toFixed(2)} ${Units}<sup>2</sup>.`;
});
