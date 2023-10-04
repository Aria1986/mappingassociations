var map = L.map('map').setView([45.179016 , 5.733493], 14);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



        // creation des icones:

var cafe = L.icon({
    iconUrl: 'coffee.png',

    iconSize:     [32, 32], // size of the icon

    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location

    popupAnchor:  [-3, -15] // point from which the popup should open relative to the iconAnchor
});

var shirt = L.icon({
    iconUrl: 'assets/img/shirt.svg',
    iconSize:     [32, 32], // size of the icon

    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -15] // point from which the popup should open relative to the iconAnchor
});

var douche = L.icon({
    iconUrl: 'assets/img/shower.svg',
    iconSize:     [32, 32], // size of the icon

    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -15] // point from which the popup should open relative to the iconAnchor
});

var bouffe = L.icon({
    iconUrl: 'assets/img/food.svg',
    iconSize:     [32, 32], // size of the icon

    iconAnchor:   [15, 15], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -15] // point from which the popup should open relative to the iconAnchor
});


        // placement des markers
    // markers cafés associatifs
L.marker([45.17938232421875, 5.744960784912109], {icon: cafe}).addTo(map)
    .bindPopup("La Pirogue Place de la commune 1871, 38100 Grenoble")
    .openPopup();  


L.marker([45.1639469, 5.7332153], {icon: cafe}).addTo(map)
    .bindPopup("Barathym 97 Gal de l'Arlequin, 38100 Grenoble")
    .openPopup();  

    // markers boutiques vetements
L.marker([45.17782974243164, 5.724198818206787], {icon: shirt}).addTo(map)
    .bindPopup("La remise, 35 Rue Général Ferrié, 38100 Grenoble")
    .openPopup();  
L.marker([45.17377,5.73065], {icon: shirt}).addTo(map)
    .bindPopup("La ressource, 3 Rue Émile Zola, 38100 Grenoble")
    .openPopup();  

    // markers douche municipales
L.marker([45.19287872314453, 5.733477592468262], {icon: douche}).addTo(map)
    .bindPopup("Douches municipales, 5 Rue des Minimes, 38000 Grenoble")
    .openPopup();

    // markers distribution alimentaire
L.marker([45.1663415, 5.7324629], {icon: bouffe}).addTo(map)
    .bindPopup("CCAS : Distributions alimentaires, 28 galerie de l’Arlequin, Lundi et jeudi de 11h30 à 13h30")
    .openPopup();  

L.marker([45.1655149, 5.7302683], {icon: bouffe}).addTo(map)
    .bindPopup("Secours Populaire : Distributions alimentaires, 8 rue des Peuplier (site des Trembles), Lundi, mardi, mercredi, jeudi et vendredi de 13h30 à 16h30")
    .openPopup();  


