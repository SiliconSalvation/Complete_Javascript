'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const getCountryData = function(country) {
//     const request = new XMLHttpRequest();

//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    
//     request.send();
    
//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
    
//         const html = `
//             <article class="country">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${(+data.population)} people (in millions)</p>
//                     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//                 </div>
//             </article>`;
    
//             countriesContainer.insertAdjacentHTML('beforeend', html);
//             countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryAndNeighborData = function(country) {
//     const request = new XMLHttpRequest();

//     request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
    
//     request.send();
    
//     request.addEventListener('load', function() {
//         const [data] = JSON.parse(this.responseText);
    
//         const html = `
//             <article class="country">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${(+data.population)} people (in millions)</p>
//                     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//                 </div>
//             </article>`;
    
//             countriesContainer.insertAdjacentHTML('beforeend', html);
//             countriesContainer.style.opacity = 1;
//     });
// };


// getCountryData('usa');

// const renderCountry = function(data) {
    
//         const html = `
//             <article class="country">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                     <h3 class="country__name">${data.name}</h3>
//                     <h4 class="country__region">${data.region}</h4>
//                     <p class="country__row"><span>👫</span>${(+data.population).toLocaleString("en-US")}</p>
//                     <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//                     <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//                 </div>
//             </article>`;
    
//             countriesContainer.insertAdjacentHTML('beforeend', html);
//             countriesContainer.style.opacity = 1;
// };

// const getCountryData = function(country) {
        
//     const request = fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//         .then(response => response.json())
//         .then(data => {
//             renderCountry(data[0]);
//             const neighbour = data[0].borders[0];

//             if(!neighbour) {
//                 return;
//             }
//             return fetch(`https://restcountries.eu/rest/v2/alpha/${neighbour}`);
//         }).then(response => response.json()).then(data => renderCountry(data)).catch(err => console.log(err));

// };

// getCountryData('usa');

// const createImage = function(imgPath) {
//     return new Promise(function (resolve, reject) {
//         const img = document.createElement('img');
//             img.src = imgPath;

//             img.addEventListener('load', event => {
//                 document.querySelector('.images').append(img);
//                 resolve(img);
//             });
        
//             img.addEventListener('error', () => reject(new Error('Image not found')));
//     });
// };

// createImage('img/img-1.jpg').then().catch(err => console.error(err));

// const whereAmI = async function() {
//     // Geolocation
//     const pos = await GeolocationPosition()
// }

// const createImage = async function(imgPath) {
    
//     try {
        

//         imgPath.addEventListener('load', e => document.querySelector('.images').append())
//     } catch(error) {
        
//     }
// }