// Abrir modal 1 DEPOIMENTOS
function openModal1() {
    document.getElementById('openModal1').style.display = 'block';
  }
  
// Fechar  modal 1 DEPOIMENTOS
function closeModal1() {
    document.getElementById('openModal1').style.display = 'none';
  }
  

// Abrir modal 2 DEPOIMENTOS
function openModal2() {
    document.getElementById('openModal2').style.display = 'block';
  }
  
// Fechar  modal 2 DEPOIMENTOS
function closeModal2() {
    document.getElementById('openModal2').style.display = 'none';
  }
  

// Abrir modal 3 DEPOIMENTOS
function openModal3() {
    document.getElementById('openModal3').style.display = 'block';
  }
  
// Fechar  modal 3 DEPOIMENTOS
function closeModal3() {
    document.getElementById('openModal3').style.display = 'none';
  }
  

// Abrir modal 4 DEPOIMENTOS
function openModal4() {
    document.getElementById('openModal4').style.display = 'block';
  }
  
// Fechar  modal 4 DEPOIMENTOS
function closeModal4() {
    document.getElementById('openModal4').style.display = 'none';
  }
  

// Abrir modal 5 DEPOIMENTOS
function openModal5() {
    document.getElementById('openModal5').style.display = 'block';
  }
  
// Fechar  modal 5 DEPOIMENTOS
function closeModal5() {
    document.getElementById('openModal5').style.display = 'none';
  }
  

// Abrir modal 6 DEPOIMENTOS
function openModal6() {
    document.getElementById('openModal6').style.display = 'block';
  }
  
// Fechar  modal 6 DEPOIMENTOS
function closeModal6() {
    document.getElementById('openModal6').style.display = 'none';
  }
  
// Fechar todos os modais quando o usuário clicar fora da janela DEPOIMENTOS
window.onclick = function(event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            closeModal(modals[i]);
        }
    }
};
// Fechar um modal específico DEPOIMENTOS
function closeModal(modal) {
    modal.style.display = "none";
}

// Botão de Dark ou Light

function darkOrLight() {

  var body = document.body;

  body.classList.toggle("dark");

}

// Botão de slider de depoimentos NAO FUNCIONOUUUUUUUU

const Swiper = section.querySelector(".swiper-container");
new Swiper(".swiper-container", {
  slidesPerView: slidesPerView[3], // Exibe apenas um slide por vez
  spaceBetween: 10, // Espaço entre os slides
  loop: true, // Loop do carrossel
  navigation: {
    nextEl: section.querySelector(".swiper-button-next"), // Botão de próximo
    prevEl: section.querySelector(".swiper-button-prev"), // Botão de anterior
  },
});


//Modais da section equipe

// Abrir modal Wagner
function openModalWagner() {
  document.getElementById('openModalWagner').style.display = 'block';
}

// Fechar  modal Wagner
function closeModalWagner() {
  document.getElementById('openModalWagner').style.display = 'none';
}

// Abrir modal Robson
function openModalRobson() {
  document.getElementById('openModalRobson').style.display = 'block';
}

// Fechar  modal Robson
function closeModalRobson() {
  document.getElementById('openModalRobson').style.display = 'none';
}

// Abrir modal Nicolas
function openModalNicolas() {
  document.getElementById('openModalNicolas').style.display = 'block';
}

// Fechar  modal Nicolas
function closeModalNicolas() {
  document.getElementById('openModalNicolas').style.display = 'none';
}

// Abrir modal Matheus
function openModalMatheus() {
  document.getElementById('openModalMatheus').style.display = 'block';
}

// Fechar  modal Matheus
function closeModalMatheus() {
  document.getElementById('openModalMatheus').style.display = 'none';
}

// Abrir modal Maiara
function openModalMaiara() {
  document.getElementById('openModalMaiara').style.display = 'block';
}

// Fechar  modal Maiara
function closeModalMaiara() {
  document.getElementById('openModalMaiara').style.display = 'none';
}

// Abrir modal Karina
function openModalKarina() {
  document.getElementById('openModalKarina').style.display = 'block';
}

// Fechar  modal Karina
function closeModalKarina() {
  document.getElementById('openModalKarina').style.display = 'none';
}
// Abrir modal Joao
function openModalJoao() {
  document.getElementById('openModalJoao').style.display = 'block';
}

// Fechar  modal Joao
function closeModalJoao() {
  document.getElementById('openModalJoao').style.display = 'none';
}

// Abrir modal Filipe
function openModalFilipe() {
  document.getElementById('openModalFilipe').style.display = 'block';
}

// Fechar  modal Filipe
function closeModalFilipe() {
  document.getElementById('openModalFilipe').style.display = 'none';
}

// Abrir modal Diego
function openModalDiego() {
  document.getElementById('openModalDiego').style.display = 'block';
}

// Fechar  modal Diego
function closeModalDiego() {
  document.getElementById('openModalDiego').style.display = 'none';
}
