{
    const welcome = () => {
        console.log("Cześć ;)"); 
    };
    
    
    const toggleBackground = () => {
        const body = document.querySelector(".body");
        const headerText = document.querySelector(".js-header__text");
        const headerImage = document.querySelector(".js-header__image");
        const themeName = document.querySelector(".js-navigation__theme");

        body.classList.toggle("dark");
        headerText.classList.toggle("header__text--dark");
        headerImage.classList.toggle("header__image--dark");
    
        if (body.classList.contains("dark")) {
            themeName.innerText = "jasny";
        } else {
            themeName.innerText = "ciemny";
        }
    };
    
    const init = () => {
    const button = document.querySelector(".js-navigation__button");

    button.addEventListener("click", toggleBackground);

    welcome();
    };

    init();
        
}