import '../scss/main.scss';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
const map = L.map('mapContainer').setView([55.6050, 13.0038], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);