/**
 *
 *
 *
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?

 *
 */



const city = [
    {
        items: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        items: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum',
    },
    {
        items: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        items: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

    },
    {
        items: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',

    },
];



const carouselElement = document.querySelector(".my-carousel-images");
console.log(carouselElement);
carouselElement.classList.add("position-relative", "text-white");

const thumbnailsElement = document.querySelector(".my-thumbnails");
thumbnailsElement.classList.add("d-flex")

let carousel = "";
let thumbnails = "";

for (let i = 0; i < city.length; i++) {
    carousel = ` 
    <img src="${city[i].items}" alt="${city[i].title}">
    <div class=" position-absolute bottom-0 text-end p-5 w-100">
    <h2>${city[i].title}</h2>
    <p>${city[i].text}</p>
</div> 

`
    thumbnails += `<div >
    <img class="img-fluid" src="${city[i].items}" alt="${city[i].title}">
    </div>

`



};

carouselElement.innerHTML = carousel;
thumbnailsElement.innerHTML += thumbnails;


/* <div class=" position-absolute ">
    <h2>${city[i].title}</h2>
    <p>${city[i].text}</p>
</div> */
