const radiusOutput = document.getElementById('radius');
const areaOutput = document.getElementById('area');

let area = 0;
const PI = 3.14159;

const radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

// Update values again for a new radius.
const newRadius = 20;
area = PI * newRadius * newRadius;
radiusOutput.textContent = newRadius;
areaOutput.textContent = area;
