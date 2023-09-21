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
