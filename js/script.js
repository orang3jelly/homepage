let button = document.querySelector(".js-navigation__button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-navigation__theme");
let headerText = document.querySelector(".js-header__text");
let headerImage = document.querySelector(".js-header__image");

button.addEventListener("click", () => {
    body.classList.toggle("dark");
    headerText.classList.toggle("header__text--dark");
    headerImage.classList.toggle("header__image--dark");

    if (body.classList.contains("dark")) {
        themeName.innerText = "jasny";
    } else {
        themeName.innerText = "ciemny";
    }
});