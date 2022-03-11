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

const carouselContainerElement = document.querySelector(".my-carousel-container");
carouselContainerElement.classList.remove("px-5");

const carouselElement = document.querySelector(".my-carousel-images");


const thumbnailsElement = document.querySelector(".my-thumbnails");
thumbnailsElement.classList.add("d-flex")



let carousel = "";
let thumbnails = "";

for (let i = 0; i < city.length; i++) {
    carousel += `
<div class="my-img-container "> 
    <div>
        <img  src="${city[i].items}" alt="${city[i].title}">
    </div>    
    <div class=" text-end p-5 w-100" id="wrapped-text">
        <h2>${city[i].title}</h2>
        <p>${city[i].text}</p>
    </div> 
</div> 
`
    thumbnails += `
    <div class="my-cover-images" >
        <img src="${city[i].items}" alt="${city[i].title}">
    </div>

`

};

carouselElement.innerHTML += carousel;
thumbnailsElement.innerHTML += thumbnails;

let activeElement = 1;

document.getElementsByClassName("my-img-container")[activeElement].classList.add("active");

document.getElementsByClassName("my-cover-images")[activeElement].classList.add("active");


/**Vai a Sinistra */
/* setInterval(goLeftCover, 3000); */
function goLeftCover() {
    document.getElementsByClassName("my-img-container")[activeElement].classList.remove("active");
    document.getElementsByClassName("my-cover-images")[activeElement].classList.remove("active");

    if (activeElement === 0) {
        activeElement = city.length - 1;
    } else {
        activeElement--
    }


    document.getElementsByClassName("my-img-container")[activeElement].classList.add("active");
    document.getElementsByClassName("my-cover-images")[activeElement].classList.add("active");
}

/**Vai a Destra */
setInterval(goRightCover, 3000);
function goRightCover() {
    document.getElementsByClassName("my-img-container")[activeElement].classList.remove("active");
    document.getElementsByClassName("my-cover-images")[activeElement].classList.remove("active");



    if (activeElement === city.length - 1) {
        activeElement = 0;
    } else {
        activeElement++
    }

    document.getElementsByClassName("my-img-container")[activeElement].classList.add("active");
    document.getElementsByClassName("my-cover-images")[activeElement].classList.add("active");

}
//*PULSANTE SINISTRO

document.querySelector(".my-previous ").addEventListener("click", function () {

    document.getElementsByClassName("my-img-container")[activeElement].classList.remove("active");
    document.getElementsByClassName("my-cover-images")[activeElement].classList.remove("active");

    if (activeElement === 0) {
        activeElement = city.length - 1;
    } else {
        activeElement--
    }


    document.getElementsByClassName("my-img-container")[activeElement].classList.add("active");
    document.getElementsByClassName("my-cover-images")[activeElement].classList.add("active");
});



//*PULSANTE DESTRO
document.querySelector(".my-next ").addEventListener("click", function () {

    document.getElementsByClassName("my-img-container")[activeElement].classList.remove("active");
    document.getElementsByClassName("my-cover-images")[activeElement].classList.remove("active");



    if (activeElement === city.length - 1) {
        activeElement = 0;
    } else {
        activeElement++
    }

    document.getElementsByClassName("my-img-container")[activeElement].classList.add("active");
    document.getElementsByClassName("my-cover-images")[activeElement].classList.add("active");
}
); 