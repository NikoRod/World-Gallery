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