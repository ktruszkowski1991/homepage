console.log(Witaj na mojej stronie!)

let theme = document.querySelector(".background")
let generalHeader = document.querySelector(".generalHeader")
let navigation = document.querySelector(".navigation")
let navigation__menuCell = document.querySelector(".navigation__menuCell")
let content__general = document.querySelector(".content__general")
let content__aside = document.querySelector(".content__aside")
let footer = document.querySelector(".footer")
let button = document.querySelector(".button")
let button__buttonName = document.querySelector(".js-button__buttonName")
let navigation__menuLink = document.querySelector(".navigation__menuLink")

button.addEventListener("click", () => {
    generalHeader.classList.toggle("generalHeader__CHangeTheme");
    navigation.classList.toggle("navigation__ChangeTheme");
    content__general.classList.toggle("content__generalChangeTheme");
    content__aside.classList.toggle("content__asideChangeTheme");
    footer.classList.toggle("footer__CHangeTheme");
    button.classList.toggle("button__CHangeTheme");
    theme.classList.toggle("background__ChangeTheme");
    if (theme.classList.contains("background__ChangeTheme")) { button__buttonName.innerText = "niebieski"; }
    else { button__buttonName.innerText = "zielony"; }
});
