'use strict'

const renderCountry = function(data, className = ''){
    console.log(data);
    
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${2}</p>
        <p class="country__row"><span>💰</span>${2}</p>
        </div>
    </article>
    `;

    document.getElementById('paises').insertAdjacentHTML('beforeend', html);
}



// OLD SCHOOL WAY TO REQUEST DATA FROM A SERVIR VIA AJAX CALL
// → xmlhttp request function
let request1 = new XMLHttpRequest();
request1.open('GET', 'https://restcountries.com/v3.1/name/portugal');
request1.send();
request1.addEventListener('load', function(){
    const [data] = JSON.parse(this.responseText);
})


// MODERN WAY OF MAKING AJAX CALLS WITH THE FETCH API
// → 
let request2 = fetch('https://restcountries.com/v3.1/name/spain');



let getPosition = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}


const whereAmI = function () {
  getPosition()
    .then(pos => fetch(`https://geocode.xyz/${pos.coords.latitude},${pos.coords.longitude}?geoit=json`))
    .then(res => res.json())
    .then(data => fetch(`https://restcountries.com/v3.1/name/${data.country}`))
    .then(res => res.json())
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message} 💥`));
};
//whereAmI();

// ASYNC / AWAY
// Podemos hacer lo mismo que con las promises y el .then() de una manera más moderna con ASYNC y AWAY.

// PRIMERO OBTENEMOS LA POSICIÓN DEL USUARIO USANDO PROMISE. el nuevo método solo se puede usar para consumir promises, no crearlas.
let getPosition2 = function(){
    return new Promise(function(resolve, reject){
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
}

const whereAmI2 = async function(){
    // 1.→ GEOLOCATION
    const pos = await getPosition2();
    const {latitude: lat, longitude: lng} = pos.coords;

    // 2.→ REVERS GEOCODING to get the name of the country with the coordinates
    const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    const dataGeo = await responseGeo.json();

    // 3.→ COUNTRY DATA
    const responseCountryData = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
    const dataCountryData = await responseCountryData.json();

    renderCountry(dataCountryData[0]);
}
whereAmI2();