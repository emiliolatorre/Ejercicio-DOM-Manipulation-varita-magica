//1. Evita el comportamiento por defecto al hacer click. Por ejemplo, si hago click sobre un enlace, este no me llevará a otra página.
const enlaces = document.getElementsByTagName('a')

for(let i=0; i<enlaces.length; i++) {
    enlaces[i].addEventListener('click', function (event) {
        event.preventDefault()
    })
    };

//2. Al hacer click sobre un elemento van a ocurrir varias cosas. Todo depende del tipo de elemento:
//2.1 Imágenes: Cambia la imagen por uno de los gif que tienes en la carpeta assets con el nombre magic-*.
const imagenes = document.getElementsByTagName('img');

for (let i=0; i<imagenes.length; i++) {
    imagenes[i].addEventListener('click', function(event) {
        event.target.src = 'assets/magic-1.gif';
})}

//2.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.

const parrafos = document.getElementsByTagName('p')

for (let i=0; i<parrafos.length; i++) {
    parrafos[i].addEventListener('click', function(event) {
        event.target.style.color = 'red'
        event.target.style.backgroundColor = 'green'
    })
}

//2.3 Bloques de article o section: Cambia el color de fondo.

const articles = document.getElementsByTagName('article')

for (let i=0; i>articles.length; i++) {
    articles[i].addEventListener('click', function(event) {
        event.target.style.backgroundColor = 'yellow';
    })
}

//3. Cuando el cursor esté sobre alguno de los siguientes elementos, seguir las instrucciones siguientes, y devolver dicho elemento a su estado original cuando salga el cursor.

//3.1 Imágenes: Cambia la imagen por el gif abracadabra.gif.
for (let i=0; i<imagenes.length; i++) {
    imagenes[i].addEventListener('mouseenter', function(event) {
        event.target.src = 'assets/abracadabra.gif';
})}


//3.2 Párrafos: Cambia el color del texto y el de fondo por uno cualquiera.
for (let i=0; i<parrafos.length; i++) {
    parrafos[i].addEventListener('mouseenter', function(event) {
        event.target.style.color = 'white'
        event.target.style.backgroundColor = 'black'
    })
}

//3.3 Bloques de article o section: Color de fondo distinto al de párrafo.
for (let i=0; i>articles.length; i++) {
    articles[i].addEventListener('mouseenter', function(event) {
        event.target.style.backgroundColor = 'grey';
    })
}