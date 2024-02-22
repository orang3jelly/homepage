console.log("działa!");

let button = document.querySelector(".js-changeButton");
let body = document.querySelector(".js-body");
let themeName = document.querySelector(".js-themeName");
let catPhotos = document.querySelector(".js-catPhotos");
let delteButton = document.querySelector(".js-delteButton");

button.addEventListener("click", () => {
  body.classList.toggle("body--dark");

  body.classList.contains("body--dark") ? (themeName.innerText = "jasne") : (themeName.innerText = "ciemne");
});

delteButton.addEventListener("click", () => {
  catPhotos.classList.toggle("js-deltedCatPhotos");
  catPhotos.classList.contains("js-deltedCatPhotos") ? delteButton.innerText = "Przywróć zdjęcia" : delteButton.innerText = "Usuń kocie zdjęcia";
});
