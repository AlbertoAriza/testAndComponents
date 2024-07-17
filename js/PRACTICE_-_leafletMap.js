// → GEOLOCATION API
navigator.geolocation.getCurrentPosition(function(position){
    const {latitude, longitude} = position.coords;
    
    // → CÓDIGO INSERCIÓN DE MAPA LEAFLET
    const map = L.map('map').setView([latitude, longitude], 13);

    /*L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);*/

    L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
        maxZoom: 20,
        subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
      }).addTo(map);

    
    map.on('click', function(mapEvent){
        const {lat, lng} = mapEvent.latlng;
        L.marker([lat, lng]).addTo(map).bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
        }))
        .setPopupContent('Workout')
        .openPopup();
    })
    
}, function(){alert('Could not get your position')})

