const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

const cocktailIcon = L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/920/920539.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

cocktails.forEach(cocktail => {
    L.marker([cocktail.lat, cocktail.lng], {icon: cocktailIcon})
        .addTo(map)
        .bindPopup(`
            <div class="cocktail-popup">
                <h3>${cocktail.name}</h3>
                <p><strong>Origin:</strong> ${cocktail.origin}</p>
                <p><strong>Year:</strong> ${cocktail.year}</p>
                <p><strong>Ingredients:</strong> ${cocktail.ingredients}</p>
                <p><strong>History:</strong> ${cocktail.history}</p>
            </div>
        `);
});
