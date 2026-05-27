
// Static weather values (metric — Uganda)
const tempC   = 10;  // °C
const windKmh = 5;   // km/h
 
/**
 * Wind Chill (metric / Celsius formula — Environment Canada).
 * Valid only when T <= 10 °C and V > 4.8 km/h.
 */
function calculateWindChill(T, V) {
  return 13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16);
}
 
window.addEventListener('DOMContentLoaded', () => {
  // Display static values
  document.getElementById('temp').textContent = tempC;
  document.getElementById('wind').textContent = windKmh;
 
  // Wind chill only viable: T <= 10 °C AND V > 4.8 km/h
  const wcEl = document.getElementById('windchill');
  if (tempC <= 10 && windKmh > 4.8) {
    wcEl.textContent = calculateWindChill(tempC, windKmh).toFixed(1);
  } else {
    wcEl.textContent = 'N/A';
  }
 
  // Footer
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastmod').textContent = document.lastModified;
});
