function mostrarBotao() {
    var botao = document.getElementById("avancarBtn");
    botao.classList.remove("oculto");
}



// Chame a função mostrarBotao após a animação dos textos
var elementosComAnimacao = document.querySelectorAll(".cabeçalho, .F3, .processor, .CPU, .Memory, .Frequency, .Master0, .Master1, .drive1, .drive2, .foter");
var tempoDeEspera = 0;

elementosComAnimacao.forEach(function(elemento) {
    elemento.style.animationDelay = tempoDeEspera + "s";
    tempoDeEspera += 1; // Ajuste o valor conforme necessário para coincidir com o tempo da sua animação
});

// Defina um tempo de espera após o término da animação para mostrar o botão
setTimeout(mostrarBotao, (tempoDeEspera * 1000) + 1000); // Adicione 1 segundo extra para garantir que todas as animações tenham terminado

