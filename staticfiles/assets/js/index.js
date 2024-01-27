// Função para calcular a diferença entre duas datas
function calcularTempoAtivo(dataInicial, dataFinal) {
    const umSegundoEmMilissegundos = 1000; // Quantidade de milissegundos em um segundo
    const umMinutoEmMilissegundos = 60 * umSegundoEmMilissegundos; // Quantidade de milissegundos em um minuto
    const umaHoraEmMilissegundos = 60 * umMinutoEmMilissegundos; // Quantidade de milissegundos em uma hora
    const umDiaEmMilissegundos = 24 * umaHoraEmMilissegundos; // Quantidade de milissegundos em um dia

    const dataInicio = new Date(dataInicial);
    const dataFim = new Date(dataFinal);
    const diferencaEmMilissegundos = Math.abs(dataInicio - dataFim);

    const dias = Math.floor(diferencaEmMilissegundos / umDiaEmMilissegundos);
    const horas = Math.floor((diferencaEmMilissegundos % umDiaEmMilissegundos) / umaHoraEmMilissegundos);
    const minutos = Math.floor((diferencaEmMilissegundos % umaHoraEmMilissegundos) / umMinutoEmMilissegundos);
    const segundos = Math.floor((diferencaEmMilissegundos % umMinutoEmMilissegundos) / umSegundoEmMilissegundos);

    return {
        dias,
        horas,
        minutos,
        segundos
    };
}

// Data de início (01/01/2017)
const dataInicioAtividade = '2017-01-01';

// Data atual
const dataAtual = new Date();

// Calcula a diferença em dias, horas, minutos e segundos
const tempoAtivo = calcularTempoAtivo(dataInicioAtividade, dataAtual);

// Atualiza o elemento com o ID "home__header" com a informação
document.getElementById('home__counter').innerText = `O tatuador está ativo há ${tempoAtivo.dias} dias, ${tempoAtivo.horas} horas, ${tempoAtivo.minutos} minutos e ${tempoAtivo.segundos} segundos.`;
