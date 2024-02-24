{
  const welcome = () => {
    console.log("Cześć!");
  };

  const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("body--dark");
    body.classList.contains("body--dark") ? (themeName.innerText = "jasne") : (themeName.innerText = "ciemne");
  };

  const deltePhotos = () => {
    const catPhotos = document.querySelector(".js-catPhotos");
    const delteButton = document.querySelector(".js-delteButton");

    catPhotos.classList.toggle("js-deltedCatPhotos");
    catPhotos.classList.contains("js-deltedCatPhotos") ? (delteButton.innerText = "Przywróć zdjęcia") : (delteButton.innerText = "Usuń kocie zdjęcia");
  };

  const init = () => {
    const button = document.querySelector(".js-changeButton");
    button.addEventListener("click", toggleBackground);

    const delteButton = document.querySelector(".js-delteButton");
    delteButton.addEventListener("click", deltePhotos);

    welcome();
  };

  init();
}
