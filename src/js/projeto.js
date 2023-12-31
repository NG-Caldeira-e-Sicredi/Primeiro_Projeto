// Função para abrir e fechar TODOS os modais (9)
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
    slidesPerView: 4,
    spaceBetween: 8.4,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      360: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
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

// validar entradas no formulário
function validarFormulario() {
  var nome = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var motivo = document.getElementById('select').value;
  var mensagem = document.getElementById('message').value;
  var termos = document.getElementById('termos-de-uso').checked;

  if (nome === '' || email === '' || motivo === '' || mensagem === '' || !termos) {
      alert('Por favor, preencha todos os campos e aceite os termos de uso.');
      return false;
  }

  return true;
}