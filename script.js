const map = L.map('map').setView([0, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

cocktails.forEach(cocktail => {
    L.marker([cocktail.lat, cocktail.lng])
        .addTo(map)
        .bindPopup(`
            <h3>${cocktail.name}</h3>
            <p><strong>Origin:</strong> ${cocktail.origin}</p>
            <p><strong>Year:</strong> ${cocktail.year}</p>
            <p><strong>Ingredients:</strong> ${cocktail.ingredients}</p>
            <p><strong>History:</strong> ${cocktail.history}</p>
        `);
});
