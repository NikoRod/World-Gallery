// SIDE A1

let btnSideA1 = document.querySelector(".more-side-a1");
let infoSideA1 = document.querySelector(".info-side-a1");
let descriptionSideA1 = document.querySelector(".description-side-a1");

function displayInfoSideA1(){
    infoSideA1.classList.toggle("desplegar");
    btnSideB1.classList.toggle("quitar");
    descriptionSideB1.classList.toggle("quitar");
}

btnSideA1.addEventListener("click", displayInfoSideA1);

// SIDE B1

let btnSideB1 = document.querySelector(".more-side-b1");
let infoSideB1 = document.querySelector(".info-side-b1");
let descriptionSideB1 = document.querySelector(".description-side-b1");

function displayInfoSideB1(){
    infoSideB1.classList.toggle("desplegar");
    btnSideA1.classList.toggle("quitar");
    descriptionSideA1.classList.toggle("quitar");
}

btnSideB1.addEventListener("click", displayInfoSideB1);


// SIDE A2

let btnSideA2 = document.querySelector(".more-side-a2");
let infoSideA2 = document.querySelector(".info-side-a2");
let descriptionSideA2 = document.querySelector(".description-side-a2");

function displayInfoSideA2(){
    infoSideA2.classList.toggle("desplegar");
    btnSideB2.classList.toggle("quitar");
    descriptionSideB2.classList.toggle("quitar");
}

btnSideA2.addEventListener("click", displayInfoSideA2);

// SIDE B2

let btnSideB2 = document.querySelector(".more-side-b2");
let infoSideB2 = document.querySelector(".info-side-b2");
let descriptionSideB2 = document.querySelector(".description-side-b2");

function displayInfoSideB2(){
    infoSideB2.classList.toggle("desplegar");
    btnSideA2.classList.toggle("quitar");
    descriptionSideA2.classList.toggle("quitar");
}

btnSideB2.addEventListener("click", displayInfoSideB2);


// SIDE A3

let btnSideA3 = document.querySelector(".more-side-a3");
let infoSideA3 = document.querySelector(".info-side-a3");
let descriptionSideA3 = document.querySelector(".description-side-a3");

function displayInfoSideA3(){
    infoSideA3.classList.toggle("desplegar");
    btnSideB3.classList.toggle("quitar");
    descriptionSideB3.classList.toggle("quitar");
}

btnSideA3.addEventListener("click", displayInfoSideA3);

// SIDE B3

let btnSideB3 = document.querySelector(".more-side-b3");
let infoSideB3 = document.querySelector(".info-side-b3");
let descriptionSideB3 = document.querySelector(".description-side-b3");

function displayInfoSideB3(){
    infoSideB3.classList.toggle("desplegar");
    btnSideA3.classList.toggle("quitar");
    descriptionSideA3.classList.toggle("quitar");
}

btnSideB3.addEventListener("click", displayInfoSideB3);


// SIDE A4

let btnSideA4 = document.querySelector(".more-side-a4");
let infoSideA4 = document.querySelector(".info-side-a4");
let descriptionSideA4 = document.querySelector(".description-side-a4");

function displayInfoSideA4(){
    infoSideA4.classList.toggle("desplegar");
    btnSideB4.classList.toggle("quitar");
    descriptionSideB4.classList.toggle("quitar");
}

btnSideA4.addEventListener("click", displayInfoSideA4);

// SIDE B4

let btnSideB4 = document.querySelector(".more-side-b4");
let infoSideB4 = document.querySelector(".info-side-b4");
let descriptionSideB4 = document.querySelector(".description-side-b4");

function displayInfoSideB4(){
    infoSideB4.classList.toggle("desplegar");
    btnSideA4.classList.toggle("quitar");
    descriptionSideA4.classList.toggle("quitar");
}

btnSideB4.addEventListener("click", displayInfoSideB4);


// SIDE A5

let btnSideA5 = document.querySelector(".more-side-a5");
let infoSideA5 = document.querySelector(".info-side-a5");
let descriptionSideA5 = document.querySelector(".description-side-a5");

function displayInfoSideA5(){
    infoSideA5.classList.toggle("desplegar");
    btnSideB5.classList.toggle("quitar");
    descriptionSideB5.classList.toggle("quitar");
}

btnSideA5.addEventListener("click", displayInfoSideA5);

// SIDE B5

let btnSideB5 = document.querySelector(".more-side-b5");
let infoSideB5 = document.querySelector(".info-side-b5");
let descriptionSideB5 = document.querySelector(".description-side-b5");

function displayInfoSideB5(){
    infoSideB5.classList.toggle("desplegar");
    btnSideA5.classList.toggle("quitar");
    descriptionSideA5.classList.toggle("quitar");
}

btnSideB5.addEventListener("click", displayInfoSideB5);


// CAMBIO DE IDIOMA

let btnSp = document.querySelector(".btn-sp");
let btnEn = document.querySelector(".btn-en");

function idiomaSp() {
    location.href = "/Index/Index.html";
}

function idiomaEn() {
    location.href = "/English version/Index/Index.html";
}

btnSp.addEventListener('click', idiomaSp);
btnEn.addEventListener('click', idiomaEn);