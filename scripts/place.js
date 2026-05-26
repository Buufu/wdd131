// Static weather values (metric)
const tempC = 24; // °C
const windKmh = 12; // km/h

function calculateWindChill(T, V){return 13.12 + 0.6215 * T - 11.37 * Math.pow(V, 0.16) + 0.3965 * T * Math.pow(V, 0.16)}

window.addEventListener('DOMContentLoaded', ()=>{
  // display static values
  document.getElementById('temp').textContent = tempC;
  document.getElementById('wind').textContent = windKmh;

  // Viable wind chill conditions for metric: T <= 10°C and V > 4.8 km/h
  const wcEl = document.getElementById('windchill');
  if (tempC <= 10 && windKmh > 4.8){
    const wc = Math.round(calculateWindChill(tempC, windKmh));
    wcEl.textContent = `${wc} °C`;
  } else {
    wcEl.textContent = 'N/A';
  }

  // Footer dates
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastmod').textContent = document.lastModified;
});
