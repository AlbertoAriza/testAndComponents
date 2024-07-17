'use strict';

/*___ _    ___   ___  _   _ ___   _ ____          _   _____   ___   _  _  ___ ___ ___    ___   ___  __  __     _   _  _ ___    _____   _____ _  _ _____ ___ 
 | _ ) |  / _ \ / _ \| | | | __| / |__ /  ___    /_\ |   \ \ / /_\ | \| |/ __| __|   \  |   \ / _ \|  \/  |   /_\ | \| |   \  | __\ \ / / __| \| |_   _/ __|
 | _ \ |_| (_) | (_) | |_| | _|  | ||_ \ |___|  / _ \| |) \ V / _ \| .` | (__| _|| |) | | |) | (_) | |\/| |  / _ \| .` | |) | | _| \ V /| _|| .` | | | \__ \
 |___/____\___/ \__\_\\___/|___| |_|___/       /_/ \_\___/ \_/_/ \_\_|\_|\___|___|___/  |___/ \___/|_|  |_| /_/ \_\_|\_|___/  |___| \_/ |___|_|\_| |_| |___/
*/

/*    _    _   _ ___ ____ 
 __ _(_)__| | / ( _ )__  |
 \ V / / _` | | / _ \ / / 
  \_/|_\__,_| |_\___//_/
*/
// VID 187 → SELECTING, CREATING, AND DELETING ELEMENTS.

// → ACTIVIDAD EN SECTION 1 - ACCEDER Y MODIFICAR EL CSS DEL DOCUMENTO
let getBtn1 = document.getElementById('btn__1');
let getDocument = document.documentElement;

let cambiarColorDocument = function(){
    if(getDocument.classList.contains('red')) getDocument.classList.toggle('red');
    else if(getDocument.classList.contains('blue')){
        getDocument.classList.toggle('blue');
        getDocument.classList.toggle('red');
    }
    else getDocument.classList.add('blue')   ;
    
}

getBtn1.addEventListener('click', function(e){
    e.preventDefault();
    cambiarColorDocument();
})

//************************************* */


// → ACTIVIDAD EN SECTION 2 - AÑADIR Y BORRAR ELEMENTOS DEL DOM.

let getCuadradoSpace = document.querySelector('.cuadradoSpace');

// → .append()
let getBtn2 = document.getElementById('btn__2');
let appendCuadrado = function(){
    let cuadrado = document.createElement('div');
    cuadrado.classList.add('squareBox');
    getCuadradoSpace.append(cuadrado);
}
getBtn2.addEventListener('click', appendCuadrado);

// → .prepend()
let getBtn2b = document.getElementById('btn__2b');
let prependCuadrado = function(){
    let cuadrado = document.createElement('div');
    cuadrado.classList.add('squareBox');
    getCuadradoSpace.prepend(cuadrado);
}
getBtn2b.addEventListener('click', prependCuadrado);


// → .remove()
let getBtn2c = document.getElementById('btn__2c');
let borrarCuadrado = function(){
    document.querySelector('.squareBox')?.remove();
}
getBtn2c.addEventListener('click', borrarCuadrado);


//************************************* */


// → ACTIVIDAD EN SECTION 3 - 


//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___  ___ 
 __ _(_)__| | / ( _ )( _ )
 \ V / / _` | | / _ \/ _ \
  \_/|_\__,_| |_\___/\___/
*/
// VID 188 → STYLES, ATTRIBUTES AND CLASSES

// → .style can be used to read and set inline styles of a given element.
getBtn2.style.backgroundColor = 'blue';
getBtn2.style.color = 'white';
console.log(getBtn2.style.color); // → white

// → getComputedStyle(element) can be used to read the CSS properties of a given element from the CSS page.
console.log(getComputedStyle(getBtn2)); // → All its properties
console.log(getComputedStyle(getBtn2).color); // → white

//  → .style.setProperty() para cambiar los estilos de la hoja CSS
document.documentElement.style.setProperty('--mainColor', 'green')

//************************************* */

// CLASSES
// CLASSES →Podemos agregar o quitar clases con los siguientes comandos:
// → .element.classList.add('clase')
setTimeout(function(){
    document.getElementById('square4').classList.add('affinity');
}, 3000)

setTimeout(function(){
    document.getElementById('square4').classList.remove('affinity');
    document.getElementById('square4').classList.add('affinity2');
}, 6000)


// → .element.classList.remove('clase')
setTimeout(function(){
    document.getElementById('square4').classList.remove('affinity2');
}, 9000)


// → .element.classList.toggle('clase')


// → .element.classList.contains('clase')


//************************************* */

// ATTRIBUTES
// ATTRIBUTES (Con JS se puede acceder a los atributos estandard en las etiquetas de los distintos elementos HTML)
let alfil = document.querySelector('.alfil');
console.log(alfil.src); // → da la ruta absoluta de la imagen
console.log(alfil.className);
console.log(alfil.alt);
alfil.alt = 'cambiamos el alt de la imagen';
console.log(alfil.alt);

// → .getAttribute() Con este método podemos acceder a atributos no standard de nuestras etiquetas.
console.log(alfil.getAttribute('designer'));
console.log(alfil.getAttribute('src')); // → da la ruta relativa de la imagen

// → .setAttribute() nos permite crear atributos nuevos non standard en una etiqueta de HTML.
alfil.setAttribute('company', 'LondonEye');
console.log(alfil.getAttribute('company'));

// → Data attribute. Son atributos que empiezan con la palabra data-loQueSea. Se añaden a las etiquetas y se recuperan con .dataset
//   Si el nombre del atributo tiene '-', debemos recordar que se debe seguir la nomenclatura camelcase: data-version-number → dataset.versionNumber
console.log(alfil.dataset.versionNumber); // → versión 2.1

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(4));

//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___ ___ 
 __ _(_)__| | / ( _ ) _ \
 \ V / / _` | | / _ \_, /
  \_/|_\__,_| |_\___//_/ 
*/
// IMPLEMENTING SMOOTH SCROLLING

// datos que podemos obtener en el navegador sobre el scroll de una pagina
let getBtn5 = document.getElementById('btn__5');
getBtn5.addEventListener('click', function(){
    console.log('scroll en el axis X:', window.scrollX);
    console.log('scroll en el axis Y:', window.scrollY);
    
    console.log('altura de la ventana del navegador del cliente:', document.documentElement.clientHeight); // → 993 (altura de la ventana de navegación)
    console.log('anchura de la ventana del navegador del cliente:', document.documentElement.clientWidth); // → 1200 (anchura de la ventana del navegador)    
})

let getBtn5b = document.getElementById('btn__5b');
let getApartado3 = document.getElementById('apartado__3');

getBtn5b.addEventListener('click', function(){
    getApartado3.scrollIntoView({behavior: 'smooth'});
})

//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___  __  
 __ _(_)__| | / / _ \/  \ 
 \ V / / _` | | \_, / () |
  \_/|_\__,_| |_|/_/ \__/
*/
// TYPES OF EVENTS AND EVENT HANDLERS
let cuadradoAzul = document.querySelector('.squareBox2');

let alert1in = function(){
    console.log('cuadrado entrado');
    cuadradoAzul.removeEventListener('mouseenter', alert1in); // → ELIMINANDO UN EVENTLISTENER CON .removeEventListener()
}
let alert1out = function(){
    console.log('cuadrado dejado');
    cuadradoAzul.removeEventListener('mouseleave', alert1out);
}

cuadradoAzul.addEventListener('mouseenter', alert1in);

cuadradoAzul.addEventListener('mouseleave', alert1out)

let getSquare4 = document.getElementById('square4');
getSquare4.onmouseenter = function(){
    console.log('segundo cuadrado entrado');
}
getSquare4.onmouseleave = function(){
    console.log('segundo cuadrado dejado');
    
}


//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___  _ 
 __ _(_)__| | / / _ \/ |
 \ V / / _` | | \_, /| |
  \_/|_\__,_| |_|/_/ |_|
*/
//  EVENT PROPAGATION: BUBBLING AND CAPTURING
/* THE THREE PHASES OF AN EVENT: 
*       1.- capturing phrase
*       2.- target phrase
*       3.- bubbling phrase
*/

//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___ ___ 
 __ _(_)__| | / / _ \_  )
 \ V / / _` | | \_, // / 
  \_/|_\__,_| |_|/_//___|
*/
//  EVENT PROPAGATION IN PRACTICE
// → CREATING A RANDOM COLOR
let randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
let randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector('#btn__6').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
})

//  debido al EVENT PROPAGATION, vemos que al hacer clic en el elemento hijo, 
//  se activa también el evento en los elementos padre que tengan un evento similar.
document.querySelector('.manejoDeEventos').addEventListener('click', function(e){
    this.style.backgroundColor = randomColor();
})

//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___ ____
 __ _(_)__| | / / _ \__ /
 \ V / / _` | | \_, /|_ \
  \_/|_\__,_| |_|/_/|___/
*/
//  EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION

//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___ _ _  
 __ _(_)__| | / / _ \ | | 
 \ V / / _` | | \_, /_  _|
  \_/|_\__,_| |_|/_/  |_|
*/
// DOM TRAVERSING
// Aprender a moverse por el DOM seleccionando elementos hijos, padres, hermanos, etc del DOM tree.
console.log('vid 194 - DOM TRAVERSING');

// → .childNodes
console.log('→ .childNodes');
let getApartadosContainer = document.querySelector('#apartadosContainer');
console.log(getApartadosContainer.childNodes);

// → .children
console.log('→ .children');
console.log(getApartadosContainer.children);

// → .firstElementChild
console.log('→ .firstElementChild');
console.log(getApartadosContainer.firstElementChild);
getApartadosContainer.firstElementChild.style.backgroundColor = 'blue';

// → .lastElementChild
console.log('→ .lastElementChild');
console.log(getApartadosContainer.firstElementChild);
getApartadosContainer.lastElementChild.style.backgroundColor = 'orange';

// → .parentNode
console.log('→ .parentNode');
console.log(getApartadosContainer.parentNode);

// → .parentElement
console.log('→ .parentElement');
console.log(getApartadosContainer.parentElement);

// → .closest()
// Nos permite ir hacia arriba en el DOM tree buscando un elemento concreto (indicado entre paréntesis).
console.log('→ .closest()');
console.log(getApartadosContainer.closest('main'));

// → previousElementSibling
console.log('→ previousElementSibling');
console.log(document.querySelector('#apartado__2')?.previousElementSibling);

// → nextElementSibling
console.log('→ nextElementSibling');
console.log(document.querySelector('#apartado__2')?.nextElementSibling);

// → previousSibling
console.log('→ previousSibling');
console.log(document.querySelector('#apartado__2')?.previousSibling);

// → nextSibling
console.log('→ nextSibling');
console.log(document.querySelector('#apartado__2')?.nextSibling);






//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___ ___ 
 __ _(_)__| | / / _ \ __|
 \ V / / _` | | \_, /__ \
  \_/|_\__,_| |_|/_/|___/
*/
// vid 195 - BUILDING A TABBED COMPONENT
const getBtnNode = document.querySelectorAll('.operations__tab');
const getBtnParent = document.querySelector('.operations__tab-container');

const getTabsNode = document.querySelectorAll('.operations__content');

getBtnParent.addEventListener('click', function(e){
    const clicked = e.target.closest('.operations__tab');
    if(!clicked) return; // → 'Guard clause' (hacemos un return si no se cumple cierta condición para detener el proceso).
    
    // Gestionando los botones
    getBtnNode.forEach((btn) => btn.classList.remove('operations__tab--active'));
    clicked.classList.add('operations__tab--active');

    // Gestionando el contenido
    getTabsNode.forEach((e) => e.classList.remove('operations__content--active'));
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})


//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___  __ 
 __ _(_)__| | / / _ \/ / 
 \ V / / _` | | \_, / _ \
  \_/|_\__,_| |_|/_/\___/
*/
//  → PASSING ARGUMENTS TO EVENT HANDLERS ←
//  → 'mouseover' & 'mouseout' are events that bubble
//  → 'mouseenter' & 'mouseleave' events do not buble up

//We can use closures to pass an argument to an event handler. Closures allows us to pass in multiple arguments and it make our code look better
let nav = document.querySelector('.nav');
const handleHover = function (o) {
  return function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');
 
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = o;
      });
    }
  };
};
 
// you can log the handleHover(0.1) to see that it returns a function which  // has access to the argument(opacity value) passed to handleHover() due to   // closures 
 
nav.addEventListener('mouseover', handleHover(0.5));
 
nav.addEventListener('mouseout', handleHover(1));

//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___ ____ 
 __ _(_)__| | / / _ \__  |
 \ V / / _` | | \_, / / / 
  \_/|_\__,_| |_|/_/ /_/
*/
// → IMPLEMENTING A STICKY NAVIGATION: THE SCROLL EVENT
// We can apply a 'scroll' event to the window element: window.addEventListener('scroll', function(e){code}). Using this 'scroll' event is not efficient.


//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___ ___ 
 __ _(_)__| | / / _ ( _ )
 \ V / / _` | | \_, / _ \
  \_/|_\__,_| |_|/_/\___/
*/
// → A BETTER WAY: THE INTERSECTION OBSERVER API
// We can create an 'intersection observer and we pass in a callback function and an object of options → new IntersectionObserver();
let getSection6 = document.querySelector('#section__6');
const obsCallback = function(entries, observer){
  //entries.forEach((entry) => console.log(entry));
};
const obsOptions = {
  root: null,  // This is the element we want to monitor if the target is intercepting. If we use 'null', we are checking for the initial viewport.
  threshold: 0.1, //(10%) the percentaje of interception at which the oberver callback function will be called. We can have multiple thresholds using an array.
};
const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(getSection6);


//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   _ ___  ___ 
 __ _(_)__| | / / _ \/ _ \
 \ V / / _` | | \_, /\_, /
  \_/|_\__,_| |_|/_/  /_/
*/
// → 
let sectionsArr = document.querySelectorAll('.section');

sectionsArr.forEach(function(element){
  element.classList.add('hiddenSection');
})

const revealSections = function(entries, observer){
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  entry.target.classList.remove('hiddenSection');
  observer2.unobserve(entry.target);
}
const sectionOptions = {
  root: null,
  threshold: 0.15,
}
const observer2 = new IntersectionObserver(revealSections, sectionOptions);
sectionsArr.forEach(function(section){
  observer2.observe(section);
  section.classList.add('hiddenSection');
})

//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   ___ __   __  
 __ _(_)__| | |_  )  \ /  \ 
 \ V / / _` |  / / () | () |
  \_/|_\__,_| /___\__/ \__/
*/
//  → LAZY LOADING IMAGES
console.log('VID 200 - LAZY LOADING IMAGES');

const imgTargets = document.querySelectorAll('img[data-src]');

let imgCallback = function(entries, observer){
  const [entry] = entries
  if(!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    entry.target.classList.remove('lazyLoad');
  })
  imgObserver.unobserve(entry.target);
}

let imgProperties = {
  root: null,
  threshold: 0.30,
}

const imgObserver = new IntersectionObserver(imgCallback, imgProperties);

imgTargets.forEach((img) => imgObserver.observe(img));

//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   ___ __  _ 
 __ _(_)__| | |_  )  \/ |
 \ V / / _` |  / / () | |
  \_/|_\__,_| /___\__/|_|
*/


//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   ___ __ ___ 
 __ _(_)__| | |_  )  \_  )
 \ V / / _` |  / / () / / 
  \_/|_\__,_| /___\__/___|
*/


//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   ___ __ ____
 __ _(_)__| | |_  )  \__ /
 \ V / / _` |  / / () |_ \
  \_/|_\__,_| /___\__/___/
*/


//**************************************************************************************************** */
//**************************************************************************************************** */
/*    _    _   ___ __  _ _  
 __ _(_)__| | |_  )  \| | | 
 \ V / / _` |  / / () |_  _|
  \_/|_\__,_| /___\__/  |_| 
*/