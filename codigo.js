const btnNav = document.querySelector(".navbar-toggler");
const configNav = document.querySelector(".navbar-collapse");

//função anônima que faz a animação do Botão do
btnNav.addEventListener("click", () => {
  configNav.classList.toggle("show-navbar-collapse");
  if (configNav.classList.contains("show-navbar-collapse")) {
    // Botão para fechar Menu
    btnNav.querySelector("img").src = "./assets/images/icone-menu2.png";
  } else {
    // Botão para abrir Menu
    btnNav.querySelector("img").src = "./assets/images/icone-menu-degrade.png";
  }
});
