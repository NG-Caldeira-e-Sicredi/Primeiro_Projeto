const sintese = window.speechSynthesis;

function talk() {
    let selObj = document.getSelection();
    let voices = sintese.getVoices();
    let t = selObj.anchorNode.firstElementChild;
    let t2 = selObj.anchorNode.parentNode;
    let opcao = selObj;
        
    if (selObj.anchorNode.parentNode.id === "txt") {
        console.log("talk");
        opcao = t2.innerText;
    } else {
        console.log("erro");
        opcao = t.alt;
    }
    
    if (!voices == 0) {
        console.log(selObj);
        console.log(opcao);
        let msg = new SpeechSynthesisUtterance();
        msg.voice = voices[0];
        msg.rate = 1;
        msg.pitch = 1;
        msg.text = opcao;
        msg.lang = "pt-BR";
        sintese.speak(msg);
    }

}

document.addEventListener('keyup', function(e) {
    if (e.key == "Enter") {
        talk();
    }
});