let contador = 0;
document.addEventListener("DOMContentLoaded", function () {
    const botao = document.getElementById("meuBotao");
    botao.addEventListener("click", 
    function CliqueiNoBotao () {
        contador++;
        if (contador == 1){
            alert ("Voce clicou 1 vez no botao")
        }

        else {
           alert (" Vc clicou " + contador + " vezes no botao ")
        }
    });
});
