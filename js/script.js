const welcome = () => {
  console.log("Cześć!");
};

let button = document.querySelector(".js-changeButton");
let delteButton = document.querySelector(".js-delteButton");

const toggleBackground = () => {
  const body = document.querySelector(".js-body");
  const themeName = document.querySelector(".js-themeName");

  body.classList.toggle("body--dark");
  body.classList.contains("body--dark") ? (themeName.innerText = "jasne") : (themeName.innerText = "ciemne");
};

const deltePhotos = () => {
  let catPhotos = document.querySelector(".js-catPhotos");

  catPhotos.classList.toggle("js-deltedCatPhotos");
  catPhotos.classList.contains("js-deltedCatPhotos") ? (delteButton.innerText = "Przywróć zdjęcia") : (delteButton.innerText = "Usuń kocie zdjęcia");
};

welcome();
