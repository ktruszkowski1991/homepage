{
    const welcome = () => {
        console.log("Witaj na mojej stronie!")
    };
    welcome();


    const changeNameButtonClick = (theme) => {
        const button__buttonName = document.querySelector(".js-button__buttonName")

        if (theme.classList.contains("background__ChangeTheme")) { button__buttonName.innerText = "niebieski"; }
        else { button__buttonName.innerText = "zielony"; }
    }


    const toggleTheme = () => {
        const theme = document.querySelector(".background")
        const generalHeader = document.querySelector(".generalHeader")
        const navigation = document.querySelectorAll(".navigation")
        const content__general = document.querySelector(".content__general")
        const content__aside = document.querySelector(".content__aside")
        const footer = document.querySelector(".footer")
   

        generalHeader.classList.toggle("generalHeader__CHangeTheme");
navigation.forEach(function(elementList) {elementList.classList.toggle("navigation__ChangeTheme");});
        content__general.classList.toggle("content__generalChangeTheme");
        content__aside.classList.toggle("content__asideChangeTheme");
        footer.classList.toggle("footer__CHangeTheme");
        button.classList.toggle("button__CHangeTheme");
        theme.classList.toggle("background__ChangeTheme");

        changeNameButtonClick(theme)
    };

    const button = document.querySelector(".button")

  const init = () => {
    button.addEventListener("click", toggleTheme);

  }
  init();

}
