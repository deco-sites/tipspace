// Função para rolar para a posição correta ao clicar em links de âncora
function scrollToAnchor(event) {
  event.preventDefault();

  var headerOffset = 83; // Altura do header (83 pixels no exemplo)

  var targetUrl = event.currentTarget.getAttribute("href");
  var targetFragment = targetUrl.substring(targetUrl.indexOf("#") + 1);
  var targetElement = document.getElementById(targetFragment);

  if (targetElement) {
    var targetOffset = targetElement.offsetTop - headerOffset;
    window.scrollTo({ top: targetOffset, behavior: "smooth" });
  }
}

// Adicionar evento de clique para todos os links de âncora
var anchorLinks = document.querySelectorAll(
  '.menu__item a[href^="https://tipspace.gg/#"]',
);
anchorLinks.forEach(function (link) {
  link.addEventListener("click", scrollToAnchor);
});
