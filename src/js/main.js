import '../scss/main.scss';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';

const map = L.map('mapContainer').setView([55.6050, 13.0038], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const spinner = document.getElementById('spinner');

function showLoadingSpinner() { spinner.style.display = 'block'; }
function hideLoadingSpinner() { spinner.style.display = 'none'; }

const testEvents = [
  { title: "Testkonsert 1", venue_name: "Malmö Arena", start: "2026-04-01T20:00:00Z", location: [13.0000, 55.6000], url: "#" },
  { title: "Testkonsert 2", venue_name: "Lund Arena", start: "2026-04-03T18:00:00Z", location: [13.2000, 55.7000], url: "#" }
];

function renderMarkers(events) {
  events.forEach(event => {
    if (!event.location) return;
    const marker = L.circleMarker([event.location[1], event.location[0]], {
      radius: 8,
      fillColor: '#FF6B6B',
      color: '#fff',
      weight: 2,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(map);
    marker.bindPopup(`
      <strong>${event.title}</strong><br>
      Datum: ${new Date(event.start).toLocaleDateString()}<br>
      Arena: ${event.venue_name || 'Okänd'}<br>
      <a href="${event.url}" target="_blank">Biljetter</a>
    `);
    marker.on('mouseover', () => marker.setStyle({ radius: 12 }));
    marker.on('mouseout', () => marker.setStyle({ radius: 8 }));
  });
}

renderMarkers(testEvents);