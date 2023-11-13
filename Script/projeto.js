// Função para abrir e fechar TODOS os modais (1 ao 14)
document.addEventListener('DOMContentLoaded', () => {
  const openModalButtons = document.querySelectorAll('.open-modal');
  const closeButtons = document.querySelectorAll('.close-modal');
  const modals = document.querySelectorAll('.modal');

  openModalButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          modals[index].style.display = 'block';
      });
  });

  closeButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          modals[index].style.display = 'none';
      });
  });

  window.addEventListener('click', (event) => {
      modals.forEach((modal, index) => {
          if (event.target === modal) {
              modals[index].style.display = 'none';
          }
      });
  });
});


// Botão de Dark ou Light
function darkOrLight() {
  const body = document.body;
  body.classList.toggle("dark");
}


// Botão de slider de depoimentos 
document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
     slidesPerView: 3,
     spaceBetween: 45,
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
  });
 });

// aqui inicia teste apresentação
let slideIndex = 0;
showSlides();

function showSlides() {
  let image;
  let slides = document.getElementsByClassName("mySlides");

  for (image = 0; image < slides.length; image++) {
    slides[image].style.display = "none";
  }

  slideIndex += 3; //3 foto por vez
  if (slideIndex > slides.length) {
    slideIndex = 3;
  }

  for (image = slideIndex - 3; image < slideIndex; image++) {
    if (image >= 0) {
      slides[image].style.display = "block";
    }
  }

  setTimeout(showSlides, 3000);
}